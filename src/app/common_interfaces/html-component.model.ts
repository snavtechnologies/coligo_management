
interface HtmlSingleComponentTextbox {
  single_element: boolean
  textbox: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  simplemask?: string;
  prefix?: string;
  sufix?: string;
  clear?: boolean;
  name?: string;
  classes?: string[];
  readonly: boolean;
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
}

interface HtmlSingleComponentNumberbox {
  single_element: boolean
  numberbox: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  name?: string;
  classes?: string[];
  readonly: boolean;
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
}

interface HtmlSingleComponentEmail {
  single_element: boolean
  email: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  name?: string;
  classes?: string[];
  readonly: boolean;
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
}

interface HtmlSingleComponentButton {
  single_element: boolean
  button: boolean;
  label?: string;
  value?: string;
  classes: string[];
  name: string;
  custom_styles?: HtmlCustomStyle[];

}

interface HtmlSingleComponentSubmit {
  single_element: boolean
  submit: boolean;
  label?: string;
  value?: string;
  name: string;
  classes: string[];
  custom_styles?: HtmlCustomStyle[];

}

interface HtmlSingleComponentTextArea {
  single_element: boolean;
  textarea: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  name?: string;
  value?: string;
  classes?: string[];
  readonly: boolean;
  custom_styles?: HtmlCustomStyle[];

}

interface HtmlSingleComponentFileChooser {
  single_element: boolean;
  filechooser: boolean;
  name?: string;
  classes?: string[];
  href?: string;
  required: boolean;
  label?: string;
  custom_styles?: HtmlCustomStyle[];

}

interface HtmlSingleComponentImage {
  single_element: boolean
  image: boolean;
  src: string;
  classes?: string[];
  brokentext: string;
  label?: string;
  custom_styles?: HtmlCustomStyle[];

}

interface HtmlSingleComponentSelect {
  single_element: boolean
  select: boolean;
  classes?: string[];
  label?: string;
  name?: string;
  multiple?: boolean;
  placeholder?: string;
  options: Options[];
  required: boolean;
  custom_styles?: HtmlCustomStyle[];

}

interface HtmlSingleComponentRadio {
  single_element: boolean
  radio: boolean;
  label?: string;
  radio_details: RDetails[];
}

interface HtmlSingleComponentDatepicker {
  single_element: boolean
  datepicker: boolean;
  label?: string;
  required: boolean;
  name?: string;
  classes?: string[];
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
}

interface RDetails {
  required: boolean;
  name?: string;
  classes?: string[];
  value: string;
  text: string;
  readonly: boolean;
  custom_styles?: HtmlCustomStyle[];
}

interface Options {
  value?: string;
  viewValue: string;
  classes?: string[];
}

interface HtmlSingleComponentCustomElement {
  single_element: boolean
  custom_element: boolean;
  label?: string;
  custom_element_identification: string;
  need_block?: boolean;
  is_element_required: boolean;
  custom_styles?: HtmlCustomStyle[];

}

 // tslint:disable-next-line:interface-over-type-literal
 type HtmlComponentF = {
  no_of_elements_in_a_row: '1' | '2' | '3' | '4' | '6' | '12' ,
  elements: HtmlComponent[],
  color?: string,
  need_card: boolean,
  card_label?: string,
  table_view: false
} | {
  no_of_elements_in_a_row?: never ,
  elements: HtmlComponent_[],
  color?: never,
  need_card: boolean,
  card_label?: string,
  table_view: true
}

// tslint:disable-next-line:interface-over-type-literal
type HtmlComponentAddMore = {
   no_of_elements_in_a_row: '1' | '2' | '3' | '4' | '6' | '12' ,
   color?: string,
   need_card: boolean,
   card_label?: string,
   add_more: boolean,
   add_more_button_name: string
   elements: HtmlComponent_[]
}

// tslint:disable-next-line:interface-over-type-literal
type HtmlComponentDynamicSelect = {
  dynamic_select: boolean,
  elements: HtmlComponent[]
}

interface HtmlComponentTextbox {
    textbox: boolean;
    label?: string;
    placeholder?: string;
    required: boolean;
    simplemask?: string;
    name?: string;
    prefix?: string;
    sufix?: string;
    clear?: boolean;
    classes?: string[];
    readonly: boolean;
    line_break_value?: '2' | '2.4' | '3' | '4' | '6' | '12' ;
    float_placeholder: string;
    custom_styles?: HtmlCustomStyle[];
    highlight_row?: boolean;
    highlight_color?: string;

}

interface HtmlComponentNumberbox {
  numberbox: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  name?: string;
  classes?: string[];
  readonly: boolean;
  line_break_value?: '2' | '2.4' | '3' | '4' | '6' | '12' ;
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;


}

interface HtmlComponentEmail {
  email: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  name?: string;
  classes?: string[];
  readonly: boolean;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

// interface LineBreak {
//   line_break_trig: boolean;
//   line_break_value: string;
// }

interface HtmlCustomStyle {
  property: string;
  value: string;
}

interface HtmlComponentButton {
  button: boolean;
  label?: string;
  value?: string;
  classes: string[];
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  name: string;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentSubmit {
  submit: boolean;
  label?: string;
  value?: string;
  classes: string[];
  name: string;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentTextArea {
  textarea: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  name?: string;
  value?: string;
  classes?: string[];
  readonly: boolean;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentFileChooser {
  filechooser: boolean;
  name?: string;
  classes?: string[];
  href?: string;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  required: boolean;
  label?: string;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentImage {
  image: boolean;
  src: string;
  classes?: string[];
  brokentext: string;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  label?: string;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentSelect {
  select: boolean;
  classes?: string[];
  label?: string;
  name?: string;
  multiple?: boolean;
  placeholder?: string;
  disabled?: boolean;
  options: Options[];
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  required: boolean;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;


}
interface HtmlComponentDynamicSelectElements {
  select: boolean;
  classes?: string[];
  label?: string;
  name?: string;
  multiple?: boolean;
  placeholder?: string;
  options: Options[];
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  required: boolean;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;


}

interface HtmlComponentRadio {
  radio: boolean;
  label?: string;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  radio_details: RDetails[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentDatepicker {
  datepicker: boolean;
  label?: string;
  line_break_value?: '2' | '3' | '4' | '6' | '12' ;
  required: boolean;
  name?: string;
  classes?: string[];
  float_placeholder: string;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;

}

interface HtmlComponentCustomElement {
  custom_element: boolean;
  label?: string;
  custom_element_identification: string;
  line_break_value?: '2' | '2.4' | '3' | '4' | '6' | '12' ;
  custom_styles?: HtmlCustomStyle[];
  highlight_row?: boolean;
  highlight_color?: string;
  need_block?: boolean;
  is_element_required: boolean;

}

interface HtmlComponentBlank {
  blank: boolean;
  highlight_row?: boolean;
  highlight_color?: string;


}

// tslint:disable-next-line:class-name
interface HtmlComponentTextbox_ {
  textbox: boolean;
  label?: string;
  placeholder?: string;
  required: boolean;
  simplemask?: string;
  name?: string;
  prefix?: string;
  sufix?: string;
  clear?: boolean;
  classes?: string[];
  readonly: boolean;
  custom_styles?: HtmlCustomStyle[];

}
// tslint:disable-next-line:class-name
interface HtmlComponentNumberbox_ {
numberbox: boolean;
label?: string;
placeholder?: string;
required: boolean;
name?: string;
classes?: string[];
readonly: boolean;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentEmail_ {
email: boolean;
label?: string;
placeholder?: string;
required: boolean;
name?: string;
classes?: string[];
readonly: boolean;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentButton_ {
button: boolean;
label?: string;
value?: string;
classes: string[];
name: string;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentSubmit_ {
submit: boolean;
label?: string;
value?: string;
classes: string[];
name: string;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentTextArea_ {
textarea: boolean;
label?: string;
placeholder?: string;
required: boolean;
name?: string;
value?: string;
classes?: string[];
readonly: boolean;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentFileChooser_ {
filechooser: boolean;
name?: string;
classes?: string[];
href?: string;
required: boolean;
label?: string;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentImage_ {
image: boolean;
src: string;
classes?: string[];
brokentext: string;
label?: string;
custom_styles?: HtmlCustomStyle[];

}

// tslint:disable-next-line:class-name
interface HtmlComponentSelect_ {
select: boolean;
classes?: string[];
label?: string;
name?: string;
multiple?: boolean;
placeholder?: string;
options: Options[];
required: boolean;
custom_styles?: HtmlCustomStyle[];


}

// tslint:disable-next-line:class-name
interface HtmlComponentRadio_ {
radio: boolean;
label?: string;
radio_details: RDetails[];

}
// tslint:disable-next-line:class-name
interface HtmlComponentDatepicker_ {
datepicker: boolean;
label?: string;
required: boolean;
name?: string;
classes?: string[];
custom_styles?: HtmlCustomStyle[];
}

// tslint:disable-next-line:class-name
interface HtmlComponentCustomElement_ {
custom_element: boolean;
label?: string;
custom_element_identification: string;
// custom_styles?: HtmlCustomStyle[];
need_block?: boolean;
is_element_required: boolean;

}

// tslint:disable-next-line:class-name
interface HtmlComponentBlank_ {
blank: boolean;

}
// tslint:disable-next-line:max-line-length
type HtmlComponent = HtmlComponentTextbox | HtmlComponentDynamicSelectElements | HtmlComponentButton | HtmlComponentTextArea | HtmlComponentFileChooser | HtmlComponentImage | HtmlComponentSelect | HtmlComponentCustomElement | HtmlComponentBlank | HtmlComponentSubmit | HtmlComponentEmail | HtmlComponentNumberbox | HtmlComponentRadio | HtmlComponentDatepicker;
// tslint:disable-next-line:max-line-length
type HtmlComponent_ = HtmlComponentTextbox_ | HtmlComponentButton_ | HtmlComponentTextArea_ | HtmlComponentFileChooser_ | HtmlComponentImage_ | HtmlComponentSelect_ | HtmlComponentCustomElement_ | HtmlComponentBlank_ | HtmlComponentSubmit_ | HtmlComponentEmail_ | HtmlComponentNumberbox_ | HtmlComponentRadio_ | HtmlComponentDatepicker_;

// tslint:disable-next-line:max-line-length
export type  HtmlComponentFinal = HtmlComponentDynamicSelect | HtmlComponentAddMore |  HtmlComponentF | HtmlSingleComponentTextbox | HtmlSingleComponentButton | HtmlSingleComponentTextArea | HtmlSingleComponentFileChooser | HtmlSingleComponentImage | HtmlSingleComponentSelect | HtmlSingleComponentCustomElement | HtmlSingleComponentSubmit | HtmlSingleComponentEmail | HtmlSingleComponentNumberbox | HtmlSingleComponentRadio | HtmlSingleComponentDatepicker;





