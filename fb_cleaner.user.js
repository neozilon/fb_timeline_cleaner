// ==UserScript==
// @name           Facebook Mobile Timeline Cleaner
// @namespace      https://github.com/SageHack/fb_timeline_cleaner
// @description    Delete posts, photos, remove likes, hide friends requests
// @include        https://m.facebook.com/*/allactivity*
// @require        http://code.jquery.com/jquery-1.8.3.min.js
// @version        1
// ==/UserScript==

$(document).ready(function(){
    console.log('script loaded');
    
    $('#root a').each(function(){
        
        if( $(this).attr('id') ){
            window.location = $(this).attr('href');
            return false;
        }
        
        if(
               $(this).html() == 'Delete'
            || $(this).html() == 'Delete Photo'
            || $(this).html() == 'Unlike'
            || $(this).html() == 'Hide from Timeline'
        ) {
           console.log('found match, redirecting');
           window.location = $(this).attr('href');
           return false;
        }
        
    });
    
});
