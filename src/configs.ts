import * as yup from "yup";

export const schema = yup.object().shape({
  data: yup.object().shape({
    jmeno_prijmeni: yup.string().required(),
    obor: yup.string().required(),
    skolni_rok: yup.string().required(),
    predmet: yup.string().required(),
    tema: yup.string().required(),
    obsah: yup.string().required(),
    prakticka_cast: yup.string().required(),
    vedouci: yup.string().required()
  })
})

export interface ValuesInterface {
  data: {
    jmeno_prijmeni: string,
    obor: string,
    skolni_rok: string,
    predmet: string,
    tema: string,
    obsah: string,
    prakticka_cast: string,
    vedouci: string
  }
}


export const initialValues = {
  data: {
    jmeno_prijmeni: "",
    obor: "",
    skolni_rok: "",
    predmet: "",
    tema: "",
    obsah: "",
    prakticka_cast: "",
    vedouci: ""
  }
}