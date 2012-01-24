$('infotip').addEventListener('click', setNextInfoTip);

var infoTipHtml = [];
infoTipHtml.push('<div style="font-weight:bold">Open/close Firebug: F12</div>');
infoTipHtml.push('<div style="font-weight:bold">Breakpoint shortcuts</div><table>    <tr>        <td valign="top" style="padding-right: 40px">            Step into (F11)<br/>            Step over (F10)<br/>            Rerun (^ + F8)        </td>        <td valign="top">            Step out (^ + F11)<br/>            Continue (F8)        </td>    </tr></table>');
infoTipHtml.push('<div style="font-weight:bold">Console shortcuts</div><table>    <tr>        <td valign="top" style="padding-right: 40px">            Open command line (CMD+^+L) in panel      </td>        </tr></table>');

var currentInfoTip = 0;
function setNextInfoTip()
{
    $('infotip').innerHTML = infoTipHtml[currentInfoTip];

    currentInfoTip++;
    if ( currentInfoTip === infoTipHtml.length   )
    {
        currentInfoTip = 0;
    }
    
}

setNextInfoTip();