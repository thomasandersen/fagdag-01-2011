$('infotip').addEventListener('click', setNextInfoTip);

var infoTipHtml = [];
infoTipHtml.push('<div>Open/close Firebug: F12</div>');
infoTipHtml.push('<div>Breakpoint shortcuts</div><table>    <tr>        <td valign="top" style="padding-right: 40px">            Step into (F11)<br/>            Step over (F10)<br/>            Rerun (^ + F8)        </td>        <td valign="top">            Step out (^ + F11)<br/>            Continue (F8)        </td>    </tr></table>');
infoTipHtml.push('<div>Console shortcuts</div><table>    <tr>        <td valign="top" style="padding-right: 40px">            Open command line (CMD+^+L) in panel      </td>        </tr></table>');

var currentInfoTip = 0;
function setNextInfoTip()
{
    if ( currentInfoTip === infoTipHtml.length  )
    {
        currentInfoTip = 0;
        $('infotip').innerHTML = '';
    }

    $('infotip').innerHTML += infoTipHtml[currentInfoTip];

    currentInfoTip++;

}

setNextInfoTip();