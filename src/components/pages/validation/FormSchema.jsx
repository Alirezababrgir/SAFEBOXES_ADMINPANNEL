import * as Yup from "yup";
export const userSchema = Yup.object().shape({
    token: Yup.string(),
    link1: Yup.string().required("entering the firs link is required"),
    link2: Yup.string().required("entering the secound link is required"),
    link3: Yup.string().required(" entering the third link is required "),
    link4: Yup.string().required(" entering the fourth link is required"),
});