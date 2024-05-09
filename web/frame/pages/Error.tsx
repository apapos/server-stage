import { useRouteError } from "react-router-dom";
import { Header } from "@components/layout";
import {
  Button,
  Text,
  Card,
  CardFooter,
  CardHeader,
} from "@fluentui/react-components";
import { Svg } from "@components/common";
import { useNavigate } from "react-router-dom";
interface ErrorResponse {
  data: string
  error: {
    message: string
    stack: string
  }
  status: number
  statusText: string
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponse;
  const onBack = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className="error-bundle">
      <Header />
      <div className="error-bundle_inner">
        <Card>
          <CardHeader
            image={<Svg name="error" size={36} />}
            header={<Text>糟糕，出问题了～</Text>}
            description={
              <Text >
                <span>{error.status}: {error.statusText}</span>
              </Text>
            }
          />

          <Text size={400}>
            {error.data}
          </Text>

          <CardFooter>
            <Button size="small" onClick={onBack}>Back Stage</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
export default Error