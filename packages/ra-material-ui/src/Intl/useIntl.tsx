import { useContext, useCallback } from "react";
import { Intl } from "./types";
import { IntlContext } from "./IntlContext";

/**
 *
 * 国际化工具类
 * @example ./useIntl.md
 */
const useIntl = (): Intl => {
	// const { intlProvider, locale } = useContext(IntlContext);

	// const intl = useCallback(
	// 	(key: string, options?: any) => intlProvider.message(key, options),
	// 	[intlProvider, locale]
	// );

	// return intlProvider ? intl : identity;
	return {
		message: identity,
	};
};

const identity = (key: string) => key;

export default useIntl;
