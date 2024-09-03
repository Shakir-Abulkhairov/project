import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

describe('Button',()=>{
    test('test',()=>{
       render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()

    })
    test('theme clear',()=>{
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
})