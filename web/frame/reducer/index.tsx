import { type PropsWithChildren, createContext, type Dispatch, type ReducerWithoutAction } from "react";
import { useToastController, ToastIntent } from '@fluentui/react-components'
import { omit } from '@utils'
type ToastController = ReturnType<typeof useToastController>

interface Message {
  content: string
  intent?: ToastIntent
}

export interface ToastExtend {
  message: (options: Message) => void
  loading: (options: Message) => void
  update: (options: Omit<Parameters<ToastController['updateToast']>[0], 'toastId'> & Message) => void
}

export type ToastInstance = ToastController & ToastExtend

export interface InstanceState {
  theme: string,
  toastId: string,
  useToast: ToastInstance,
}

interface InstanceAction {
  type: string
  payload: Record<string, any>
}

interface InstanceReducer {
  state: ReducerWithoutAction<InstanceState>
  action: Dispatch<InstanceAction>
}

const initialState: InstanceState = {
  theme: useCookie.get('theme') || 'light',
  toastId: '',
  useToast: {} as ToastInstance,
}

const InstanceContent = createContext<InstanceState>(initialState)
const InstanceDispatch = createContext({} as InstanceReducer['action'])

const InstanceReducer = (state: InstanceState, action: InstanceAction) => {
  switch (action.type) {
    case 'change_theme': {
      return {
        ...state,
        theme: action.payload.theme
      }
    }
    case 'register_toast': {
      return {
        ...state,
        toastId: action.payload.toastId,
        useToast: action.payload.useToast,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const InstanceProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(InstanceReducer, initialState)
  const { theme } = state
  useEffect(() => {
    const el = document.querySelector('html')
    el?.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <InstanceContent.Provider value={state}>
      <InstanceDispatch.Provider value={dispatch}>
        {props.children}
      </ InstanceDispatch.Provider>
    </InstanceContent.Provider>
  )
}

export const useApp = () => {
  return {
    state: omit(useContext(InstanceContent), ['useToast']),
    useToast: useContext(InstanceContent).useToast,
    dispatch: useContext(InstanceDispatch)
  }
}

export default InstanceProvider