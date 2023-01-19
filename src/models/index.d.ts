import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAIprompt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIprompt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly promptObj?: string | null;
  readonly image?: string | null;
  readonly Styles?: (Style | null)[] | null;
  readonly Size?: Size | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aIpromptSizeId?: string | null;
}

type LazyAIprompt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIprompt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly promptObj?: string | null;
  readonly image?: string | null;
  readonly Styles: AsyncCollection<Style>;
  readonly Size: AsyncItem<Size | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aIpromptSizeId?: string | null;
}

export declare type AIprompt = LazyLoading extends LazyLoadingDisabled ? EagerAIprompt : LazyAIprompt

export declare const AIprompt: (new (init: ModelInit<AIprompt>) => AIprompt) & {
  copyOf(source: AIprompt, mutator: (draft: MutableModel<AIprompt>) => MutableModel<AIprompt> | void): AIprompt;
}

type EagerStyle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Style, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Sizes: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStyle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Style, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Sizes: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Style = LazyLoading extends LazyLoadingDisabled ? EagerStyle : LazyStyle

export declare const Style: (new (init: ModelInit<Style>) => Style) & {
  copyOf(source: Style, mutator: (draft: MutableModel<Style>) => MutableModel<Style> | void): Style;
}

type EagerSize = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Size, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySize = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Size, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Size = LazyLoading extends LazyLoadingDisabled ? EagerSize : LazySize

export declare const Size: (new (init: ModelInit<Size>) => Size) & {
  copyOf(source: Size, mutator: (draft: MutableModel<Size>) => MutableModel<Size> | void): Size;
}