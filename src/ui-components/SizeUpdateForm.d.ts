/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Size } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SizeUpdateFormInputValues = {
    untitledfield?: string;
};
export declare type SizeUpdateFormValidationValues = {
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SizeUpdateFormOverridesProps = {
    SizeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SizeUpdateFormProps = React.PropsWithChildren<{
    overrides?: SizeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    size?: Size;
    onSubmit?: (fields: SizeUpdateFormInputValues) => SizeUpdateFormInputValues;
    onSuccess?: (fields: SizeUpdateFormInputValues) => void;
    onError?: (fields: SizeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SizeUpdateFormInputValues) => SizeUpdateFormInputValues;
    onValidate?: SizeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SizeUpdateForm(props: SizeUpdateFormProps): React.ReactElement;
