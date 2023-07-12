import { Button, Stack, TextField } from "@mui/material"
import { FormEvent, useState } from "react"

export const NewTodoForm = ({ onSubmit }: { onSubmit: (title: string) => void }) => {

    const [newItem, setNewItem] = useState("")


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <Stack direction="row">
            <TextField
                label="New item"
                variant="outlined"
                value={newItem}
                onChange={({ target: { value } }) => setNewItem(value)}
                sx={{
                    backgroundColor: '#B2BEB5',
                    color: '#000000',
                }}
            />
            <Button
                variant="outlined"
                onClick={handleSubmit}
                sx={{
                    backgroundColor: '#B2BEB5',
                    color: '#000000',
                    marginLeft: '1rem'
                }}
            >
                Add
            </Button>
        </Stack>
    )


}