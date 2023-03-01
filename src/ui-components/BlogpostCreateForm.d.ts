/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogpostCreateFormInputValues = {
    title?: string;
    text?: string;
    img?: string;
};
export declare type BlogpostCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogpostCreateFormOverridesProps = {
    BlogpostCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogpostCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogpostCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogpostCreateFormInputValues) => BlogpostCreateFormInputValues;
    onSuccess?: (fields: BlogpostCreateFormInputValues) => void;
    onError?: (fields: BlogpostCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogpostCreateFormInputValues) => BlogpostCreateFormInputValues;
    onValidate?: BlogpostCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogpostCreateForm(props: BlogpostCreateFormProps): React.ReactElement;
