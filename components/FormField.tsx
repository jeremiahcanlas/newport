import {
  Input,
  FormErrorMessage,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "formik";

interface Props {
  placeholder: string | undefined;
  name: string | undefined;
  type: any | "";
  textbox: boolean | null;
}

const FormField: React.FC<Props> = ({ placeholder, name, type, textbox }) => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched} my="1em">
            {textbox ? (
              <Textarea
                {...field}
                variant="flushed"
                id={name}
                placeholder={placeholder}
                height={["200px", "150px"]}
              />
            ) : (
              <Input
                {...field}
                variant="flushed"
                id={name}
                placeholder={placeholder}
                type={type}
              />
            )}
            <FormErrorMessage fontSize="0.8em">{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

FormField.defaultProps = {
  placeholder: "",
  type: "text",
  textbox: false,
};

export default FormField;
