// export type Intl = (key: string, options?: any) => string;

// export type IntlProvider = {
// 	message: Intl;
// 	changeLocale: (locale: string, options?: any) => Promise<void>;
// 	getLocale: () => string;
// 	// [key: string]: any;
// };

type Message = (key: string, options?: any) => string;

export interface Intl {
	message: Message;
}