import { Button } from "@chakra-ui/button"

export const PrimaryButton = (props: any) => {
  const { onClick, children } = props;

  return (
    <Button
      size="md"
      bg="green.300"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}