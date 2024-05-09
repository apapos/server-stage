import type { PropsWithChildren } from 'react'
import { FluentProvider, useId, Toaster, useToastController, Toast, ToastTitle, Spinner } from '@fluentui/react-components';
import { customTheme } from '@style'
import { useApp, type ToastExtend } from '@reducer';

export const FluentContext = (props: PropsWithChildren) => {
  const { state: { theme }, dispatch } = useApp()
  const toasterId = useId("toaster");
  const useToast = useToastController(toasterId);

  const extendToast: ToastExtend = useMemo(() => ({
    message: (options) => {
      const { content, intent = 'info' } = options
      return useToast.dispatchToast(<Toast>
        <ToastTitle>{content}</ToastTitle>
      </Toast>, { intent })
    },
    loading: (options) => {
      const { content } = options
      return useToast.dispatchToast(<Toast>
        <ToastTitle media={<Spinner size="tiny" />}>
          {content}
        </ToastTitle>
      </Toast>, {
        timeout: -1,
        toastId: toasterId,
      })
    },
    update: (options) => {
      const { content } = options
      return useToast.updateToast({
        ...options,
        content: (
          <Toast>
            <ToastTitle>{content}</ToastTitle>
          </Toast>
        ),
        toastId: toasterId,
      })
    },
  }), [useToast, toasterId])

  useEffect(() => {
    dispatch({
      type: 'register_toast',
      payload: {
        toastId: toasterId,
        useToast: {
          ...useToast,
          ...extendToast
        }
      }
    })
  }, [dispatch, extendToast, toasterId, useToast])

  const dynamicTheme = useMemo(() => {
    return theme === 'dark' ? customTheme.dark : customTheme.light
  }, [theme])

  return (
    <FluentProvider className='fluent-provider' theme={dynamicTheme}>
      {props.children}
      <Toaster toasterId={toasterId} position="top" limit={3}></Toaster>
    </FluentProvider>
  )
}