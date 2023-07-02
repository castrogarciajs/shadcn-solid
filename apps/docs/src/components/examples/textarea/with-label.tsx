import { TextField, TextFieldLabel, TextFieldTextArea } from "~/components"

export const TextareaWithLabel = () => {
    return (
        <TextField class="grid w-full max-w-sm gap-1.5">
            <TextFieldLabel>Your message</TextFieldLabel>
            <TextFieldTextArea placeholder="Type your message here." />
        </TextField>
    )
}