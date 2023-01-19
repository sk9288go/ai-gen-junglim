/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AIprompt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AIpromptUpdateFormInputValues = {
    promptObj?: string;
    image?: string;
};
export declare type AIpromptUpdateFormValidationValues = {
    promptObj?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AIpromptUpdateFormOverridesProps = {
    AIpromptUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    promptObj?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AIpromptUpdateFormProps = React.PropsWithChildren<{
    overrides?: AIpromptUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aIprompt?: AIprompt;
    onSubmit?: (fields: AIpromptUpdateFormInputValues) => AIpromptUpdateFormInputValues;
    onSuccess?: (fields: AIpromptUpdateFormInputValues) => void;
    onError?: (fields: AIpromptUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AIpromptUpdateFormInputValues) => AIpromptUpdateFormInputValues;
    onValidate?: AIpromptUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AIpromptUpdateForm(props: AIpromptUpdateFormProps): React.ReactElement;
