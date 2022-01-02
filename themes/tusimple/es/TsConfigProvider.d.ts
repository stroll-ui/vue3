import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    abstract: BooleanConstructor;
    bordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    clsPrefix: StringConstructor;
    locale: PropType<{
        name: string;
        global: {
            undo: string;
            redo: string;
            confirm: string;
        };
        Popconfirm: {
            positiveText: string;
            negativeText: string;
        };
        Cascader: {
            placeholder: string;
            loading: string;
            loadingRequiredMessage: (label: string) => string;
        };
        Time: {
            dateFormat: string;
            dateTimeFormat: string;
        };
        DatePicker: {
            yearFormat: string;
            monthFormat: string;
            dayFormat: string;
            yearTypeFormat: string;
            monthTypeFormat: string;
            dateFormat: string;
            dateTimeFormat: string;
            quarterFormat: string;
            clear: string;
            now: string;
            confirm: string;
            selectTime: string;
            selectDate: string;
            datePlaceholder: string;
            datetimePlaceholder: string;
            monthPlaceholder: string;
            yearPlaceholder: string;
            quarterPlaceholder: string;
            startDatePlaceholder: string;
            endDatePlaceholder: string;
            startDatetimePlaceholder: string;
            endDatetimePlaceholder: string;
            monthBeforeYear: boolean;
            firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6;
            today: string;
        };
        DataTable: {
            checkTableAll: string;
            uncheckTableAll: string;
            confirm: string;
            clear: string;
        };
        Transfer: {
            sourceTitle: string;
            targetTitle: string;
        };
        Empty: {
            description: string;
        };
        Select: {
            placeholder: string;
        };
        TimePicker: {
            placeholder: string;
            positiveText: string;
            negativeText: string;
            now: string;
        };
        Pagination: {
            goto: string;
            selectionSuffix: string;
        };
        DynamicTags: {
            add: string;
        };
        Log: {
            loading: string;
        };
        Input: {
            placeholder: string;
        };
        InputNumber: {
            placeholder: string;
        };
        DynamicInput: {
            create: string;
        };
        ThemeEditor: {
            title: string;
            clearAllVars: string;
            clearSearch: string;
            filterCompName: string;
            filterVarName: string;
            import: string;
            export: string;
            restore: string;
        };
    } | null>;
    dateLocale: PropType<import("../../../src/locales/date/enUS").NDateLocale | null>;
    namespace: StringConstructor;
    rtl: PropType<import("../../../src/config-provider/src/internal-interface").RtlProp>;
    tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    hljs: PropType<import("../../../src/_mixins").Hljs>;
    theme: PropType<import("naive-ui").GlobalTheme | null>;
    themeOverrides: PropType<import("naive-ui").GlobalThemeOverrides | null>;
    componentOptions: PropType<import("naive-ui").GlobalComponentConfig>;
    icons: PropType<import("naive-ui").GlobalIconConfig>;
    breakpoints: PropType<import("../../../src/config-provider/src/internal-interface").Breakpoints>;
    as: {
        readonly type: PropType<string | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    themeName: {
        type: PropType<"dark" | "light">;
        default: string;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    abstract?: unknown;
    bordered?: unknown;
    clsPrefix?: unknown;
    locale?: unknown;
    dateLocale?: unknown;
    namespace?: unknown;
    rtl?: unknown;
    tag?: unknown;
    hljs?: unknown;
    theme?: unknown;
    themeOverrides?: unknown;
    componentOptions?: unknown;
    icons?: unknown;
    breakpoints?: unknown;
    as?: unknown;
    themeName?: unknown;
} & {
    abstract: boolean;
    tag: string;
    themeName: "dark" | "light";
} & {
    namespace?: string | undefined;
    rtl?: import("../../../src/config-provider/src/internal-interface").RtlProp | undefined;
    as?: string | undefined;
    clsPrefix?: string | undefined;
    theme?: import("naive-ui").GlobalTheme | null | undefined;
    themeOverrides?: import("naive-ui").GlobalThemeOverrides | null | undefined;
    bordered?: boolean | undefined;
    locale?: {
        name: string;
        global: {
            undo: string;
            redo: string;
            confirm: string;
        };
        Popconfirm: {
            positiveText: string;
            negativeText: string;
        };
        Cascader: {
            placeholder: string;
            loading: string;
            loadingRequiredMessage: (label: string) => string;
        };
        Time: {
            dateFormat: string;
            dateTimeFormat: string;
        };
        DatePicker: {
            yearFormat: string;
            monthFormat: string;
            dayFormat: string;
            yearTypeFormat: string;
            monthTypeFormat: string;
            dateFormat: string;
            dateTimeFormat: string;
            quarterFormat: string;
            clear: string;
            now: string;
            confirm: string;
            selectTime: string;
            selectDate: string;
            datePlaceholder: string;
            datetimePlaceholder: string;
            monthPlaceholder: string;
            yearPlaceholder: string;
            quarterPlaceholder: string;
            startDatePlaceholder: string;
            endDatePlaceholder: string;
            startDatetimePlaceholder: string;
            endDatetimePlaceholder: string;
            monthBeforeYear: boolean;
            firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6;
            today: string;
        };
        DataTable: {
            checkTableAll: string;
            uncheckTableAll: string;
            confirm: string;
            clear: string;
        };
        Transfer: {
            sourceTitle: string;
            targetTitle: string;
        };
        Empty: {
            description: string;
        };
        Select: {
            placeholder: string;
        };
        TimePicker: {
            placeholder: string;
            positiveText: string;
            negativeText: string;
            now: string;
        };
        Pagination: {
            goto: string;
            selectionSuffix: string;
        };
        DynamicTags: {
            add: string;
        };
        Log: {
            loading: string;
        };
        Input: {
            placeholder: string;
        };
        InputNumber: {
            placeholder: string;
        };
        DynamicInput: {
            create: string;
        };
        ThemeEditor: {
            title: string;
            clearAllVars: string;
            clearSearch: string;
            filterCompName: string;
            filterVarName: string;
            import: string;
            export: string;
            restore: string;
        };
    } | null | undefined;
    dateLocale?: import("../../../src/locales/date/enUS").NDateLocale | null | undefined;
    hljs?: import("../../../src/_mixins").Hljs | undefined;
    componentOptions?: import("naive-ui").GlobalComponentConfig | undefined;
    icons?: import("naive-ui").GlobalIconConfig | undefined;
    breakpoints?: import("../../../src/config-provider/src/internal-interface").Breakpoints;
}>, {
    abstract: boolean;
    tag: string;
    as: string | undefined;
    bordered: boolean | undefined;
    themeName: "dark" | "light";
}>;
export default _default;
