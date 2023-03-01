/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Blogpost } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogpostUpdateFormInputValues = {
    title?: string;
    text?: string;
    img?: string;
};
export declare type BlogpostUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogpostUpdateFormOverridesProps = {
    BlogpostUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogpostUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogpostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogpost?: Blogpost;
    onSubmit?: (fields: BlogpostUpdateFormInputValues) => BlogpostUpdateFormInputValues;
    onSuccess?: (fields: BlogpostUpdateFormInputValues) => void;
    onError?: (fields: BlogpostUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogpostUpdateFormInputValues) => BlogpostUpdateFormInputValues;
    onValidate?: BlogpostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogpostUpdateForm(props: BlogpostUpdateFormProps): React.ReactElement;
