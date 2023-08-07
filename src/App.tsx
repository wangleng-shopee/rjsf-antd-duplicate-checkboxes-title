import { Form } from "@rjsf/antd";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

const SCHEMA: RJSFSchema = {
  title: "Bug Report",
  type: "object",
  properties: {
    multipleChoicesList: {
      type: "array",
      title: "A multiple choices list",
      items: {
        type: "string",
        enum: ["foo", "bar", "fuzz", "qux"],
      },
      uniqueItems: true,
    },
  },
};

const UI_SCHEMA: UiSchema = {
  multipleChoicesList: {
    "ui:widget": "checkboxes",
  },
};

export default function App() {
  return <Form schema={SCHEMA} uiSchema={UI_SCHEMA} validator={validator} />;
}
