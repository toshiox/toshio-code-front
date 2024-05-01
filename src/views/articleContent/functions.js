import $ from 'jquery';
import {navigatorFunctions} from '../../services/utils/navigator';

export function SetContentClass(){
    let content = $('#card-content');
    if(navigatorFunctions.isMobile())
        content.addClass('content-margin-mobile ruby-font-size-mobile');
    else
        content.addClass('content-margin-web ruby-font-size-web');
}

export const functions = {
    SetContentClass
}