import React, {Component} from 'react';
import './ColorMode.less';
import Select from "../lc-select/Select";
import CfgItemBorder from "../lc-config-item/CfgItemBorder";
import BaseColorPicker from "../lc-color-picker/BaseColorPicker";
import GroupColorPicker from "../lc-color-picker/GroupColorPicker";
import UnderLineInput from "../lc-input/UnderLineInput";


export enum ColorModeType {
    SINGLE = 'single',
    MULTI = 'multi',
    LINER_GRADIENT = 'liner_gradient',
    RADIAL_GRADIENT = 'radial_gradient',
}

export interface ColorModeValue {
    mode: string;
    value: string | string[];
    angle?: number;
}

export interface ColorModeProps {
    data?: ColorModeValue
    exclude?: string[];

    onChange?(data: ColorModeValue): void;
}

class ColorMode extends Component<ColorModeProps, ColorModeValue> {

    singleValue: string = '#fff';
    multiValue: string[] = ['#fff'];
    gradientValue: string[] = ['#fff', '#fff'];
    angle: number = 0;

    state: ColorModeValue = {
        value: '',
        mode: '',
    }

    constructor(props: ColorModeProps) {
        super(props);
        const {mode = ColorModeType.SINGLE, value = "#fff", angle = 0} = props.data!;
        this.state = {mode, value};
        this.angle = angle;
        if (mode === ColorModeType.MULTI)
            this.multiValue = value as string[];
        else if (mode === ColorModeType.LINER_GRADIENT || mode === ColorModeType.RADIAL_GRADIENT)
            this.gradientValue = value as string[];
    }

    modeChange = (_mode: string) => {
        let {value} = this.state;
        switch (_mode) {
            case ColorModeType.SINGLE:
                value = this.singleValue;
                break;
            case ColorModeType.MULTI:
                value = this.multiValue;
                break;
            case ColorModeType.LINER_GRADIENT:
                value = this.gradientValue;
                break;
            case ColorModeType.RADIAL_GRADIENT:
                value = this.gradientValue;
                break;
        }
        this.setState({mode: _mode, value});
        const {onChange} = this.props;
        onChange && onChange({mode: _mode, value});
    }

    colorChange = (_value: string | string[]) => {
        const {mode} = this.state;
        this.setState({value: _value});
        const {onChange} = this.props;
        console.log("最新", _value)
        onChange && onChange({mode, value: _value, angle: this.angle});
    }

    render() {
        const {mode, value} = this.state;
        const {exclude} = this.props;
        const modeOptions = [
            {value: ColorModeType.SINGLE, label: '单色'},
            {value: ColorModeType.MULTI, label: '多色'},
            {value: ColorModeType.LINER_GRADIENT, label: '线性'},
            {value: ColorModeType.RADIAL_GRADIENT, label: '径向'},
        ].filter(item => !exclude?.includes(item.value));
        return (
            <div className={"lc-color-mode"}>
                <div className={'mode-select'} style={{width: 70}}>
                    <Select defaultValue={mode || ColorModeType.SINGLE}
                            onChange={this.modeChange}
                            options={modeOptions}/>
                </div>
                {
                    mode === ColorModeType.SINGLE && <CfgItemBorder width={'100px'}>
                        <BaseColorPicker
                            defaultValue={value as string}
                            onChange={this.colorChange}
                            style={{width: '100px', height: '15px', borderRadius: 2}}
                            showText={true}/>
                    </CfgItemBorder>
                }
                {mode === ColorModeType.MULTI && <GroupColorPicker onChange={this.colorChange} canAdd={true}
                                                                   containerStyle={{width: 'calc(100% - 30px)'}}
                                                                   value={(value as string[]) || ['#00bcff']}/>}
                {(mode === ColorModeType.LINER_GRADIENT ||
                    mode === ColorModeType.RADIAL_GRADIENT) &&
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <BaseColorPicker showText={true}
                                     onChange={(value) => {
                                         this.gradientValue[0] = value;
                                         this.colorChange(this.gradientValue);
                                     }}
                                     style={{width: '80px', height: '15px', borderRadius: 2}}
                                     defaultValue={(value as string[])[0]}/>
                    &nbsp;
                    <BaseColorPicker showText={true} style={{width: '80px', height: '15px', borderRadius: 2}}
                                     onChange={(value) => {
                                         this.gradientValue[1] = value;
                                         this.colorChange(this.gradientValue);
                                     }}
                                     defaultValue={(value as string[])[1]}/>
                    &nbsp;
                    {
                        mode === ColorModeType.LINER_GRADIENT &&
                        <UnderLineInput
                            containStyle={{width: 50}} type={'number'} defaultValue={this.angle} onChange={(event) => {
                            this.angle = parseInt(event.target.value || '0');
                            this.colorChange(this.gradientValue);
                        }}/>
                    }
                </div>}
            </div>
        );
    }
}

export default ColorMode;