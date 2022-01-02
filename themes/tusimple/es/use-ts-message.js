import { useMessage as _useMessage } from 'naive-ui';
import { icons } from './icons';
function useMessage() {
    const messageApi = _useMessage();
    const extendedApi = {
        danger: (content, options) => {
            return messageApi.error(content, Object.assign(Object.assign({}, options), { icon: icons.warning }));
        }
    };
    return Object.assign(extendedApi, messageApi);
}
export { useMessage };
