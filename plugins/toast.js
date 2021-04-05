import { ToastProgrammatic as Toast } from "buefy";

export default ({ app }, inject) => {
  inject("toast", props => Toast.open(props));
};
