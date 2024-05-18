import * as Yup from "yup";
export const userSchema = Yup.object().shape({
    token: Yup.string(),
    link1: Yup.string(),
    link2: Yup.string(),
    link3: Yup.string(),
    link4: Yup.string(),
});
/*.required("entering the firs link is required"),
.required("entering the secound link is required"),
.required(" entering the third link is required "),
.required(" entering the fourth link is required"),*/