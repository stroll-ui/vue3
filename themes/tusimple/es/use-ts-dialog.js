import { useDialog as _useDialog } from 'naive-ui';
import { icons } from './icons';
function useDialog() {
    const dialog = _useDialog();
    const extendedApi = {
        danger: (options) => {
            return dialog.error(Object.assign(Object.assign({}, options), { icon: icons.warning, type: 'error' }));
        }
    };
    return Object.assign(extendedApi, dialog);
}
export { useDialog };
