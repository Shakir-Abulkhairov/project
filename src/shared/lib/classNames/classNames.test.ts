import {classNames} from "../classNames/index";

describe('classNames',()=>{
    test('with empty parameters',()=>{
        expect(classNames('test',{},[''])).toBe('test')
    })

    test('with mods',()=>{
        expect(classNames('test',{hovered:true,isActive:true},[''])).toBe('test hovered isActive')
    })

    test('with additional',()=>{
        expect(classNames('test',{hovered:true,isActive:true},['additional'])).toBe('test additional hovered isActive')
    })

    test('with mods but isActive false',()=>{
        expect(classNames('test',{hovered:true,isActive:false},['additional'])).toBe('test additional hovered')
    })

})