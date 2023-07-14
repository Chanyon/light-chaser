import React, {Component} from 'react';
import './LayerItem.less';
import previewOpen from './icon/preview-open.svg';
import unlockImg from './icon/unlock.svg';
import previewClose from './icon/preview-close.svg';
import lockImg from './icon/lock.svg';

export interface LayerItemProps {
    name?: string;
    lock?: boolean;
    hide?: boolean;
    lockChange?: (data: boolean) => void;
    showChange?: (data: boolean) => void;
}

class LayerItem extends Component<LayerItemProps> {

    toggleLock = () => {
        const {lockChange, lock} = this.props;
        lockChange && lockChange(!lock);
    }

    toggleShow = () => {
        const {showChange, hide} = this.props;
        showChange && showChange(!hide);
    }

    render() {
        const {name, lock, hide} = this.props;
        return (
            <div className={'layer-item'}>
                <div className={'layer-item-name'}>{name}</div>
                <div className={'layer-item-operators'}>
                    <div className={'layer-item-operator'}>
                        <span onClick={this.toggleShow}>
                            <img src={hide ? previewClose : previewOpen} alt={hide ? '显示' : '隐藏'}
                                 style={{width: 14}}/>
                        </span>
                    </div>
                    <div className={'layer-item-operator'}>
                        <span onClick={this.toggleLock}>
                            <img src={lock ? lockImg : unlockImg} alt={lock ? '锁定' : '解锁'}/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LayerItem;