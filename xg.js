// 等待页面所有资源加载完成
window.addEventListener('load', function () {
    console.log('整个网页包括所有资源都已加载完成！');
    // alert("这是一条消息！");
});

// jQuery 等待DOM加载完成
$(document).ready(function () {
    // 删除指定类名的元素
    $('.top1416557911, .main00002, .top1410001018').remove();
    $('.top1419992445,.bzyh106887981231,.wzjszc').remove();

    // 移除指定元素的所有类名
    $('.zdnf1409557049, .zdnf14080947711, .zdnf14080947712, .top1419992445, .top1410014003, .top1408773220.dingbu').removeClass();

    // 精准移除指定类名
    $('[class="tmvl00005 neiyemian"]').removeClass('tmvl00005 neiyemian');
    $('[class="main00005 neiyemian"]').removeClass('main00005 neiyemian');
    $('[class="top1416557587 zuobiaoti"]').removeClass('top1416557587 zuobiaoti');
    $('[class="knep14080947711 zuobiaoti"]').removeClass('knep14080947711 zuobiaoti');
    $('[class="knep14080947712 zuobiaoti"]').removeClass('knep14080947712 zuobiaoti');
    
    // 添加新类名并移除旧类名
    $('[class="knep1409556320"]').addClass('biaoti').removeClass('knep1409556320');
    $('[class="lab13960025542"]').addClass('biaoti').removeClass('lab13960025542');
    $('[class="zdnf1409554445"]').addClass('biaoti').removeClass('zdnf1409554445');
    
    // 批量移除类名
    $('[class="top1416557647"]').removeClass('top1416557647');
    $('[class="top1417163320"]').removeClass('top1417163320');
    $('.zdnf1409567446.youyemian').removeClass('zdnf1409567446 youyemian');
    $('.top8888888888').removeClass('top8888888888');
    $('.top1416557278').addClass('card').removeClass('top1416557278');
    $('.smfz13805316682, .main00003, .top1408594199.dibu, .xvgi1408587452, .top1410514125, .top1409975508, .inside_div').removeClass();
    
    // 导航相关类名移除
    $('.xvgi14080942120.daohang').removeClass('xvgi14080942120 daohang');
    $('.xvgi14080942121.daohang').removeClass('xvgi14080942121 daohang');
    $('.xvgi14080942122.daohang').removeClass('xvgi14080942122 daohang');
    
    // 右侧标题类名移除
    $('.lab13960025030, .lab13960025031, .lab13960025032').removeClass(function() {
        return $(this).attr('class'); // 移除元素的所有类名
    });
    $('.main00004.neiyemian').removeClass('main00004 neiyemian');
    $('.ptln13805316682').removeClass('ptln13805316682');

    // 导航菜单样式设置
    $('#topmenuid').css({
        'listStyle': 'none',
        'padding': '0',
        'margin': '0',
        'backgroundColor': '#158751',
        'color': 'white'
    });

    // 导航列表项样式
    $('#topmenuid li').css({
        'display': 'inline-block',
        'margin': '0',
        'padding': '10px 20px'
    });

    // 导航链接样式
    $('#topmenuid a').css({
        'display': 'block',
        'color': 'white',
        'textDecoration': 'none',
        'padding': '5px 10px',
        'transition': 'background-color 0.3s'
    });

    // 移除导航相关的内嵌样式
    $('#topmenuid, #topmenuid li, #topmenuid a').each(function () {
        this.style.borderRadius = '';
        this.style.boxShadow = '';
        $(this).removeClass();
    });

    // 激活导航样式
    $('#current').css({
        'backgroundColor': '#0f4c3d'
    });

    // 移除指定元素的子元素类名
    $('div.top1410009291 > div > div > div').removeClass();

    // 美化外层div
    $('div.top1410009291').css({
        'padding': '20px',
        'background-color': '#f0f0f0',
        'border-radius': '10px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)'
    });

    // 服务描述div样式
    $('div[accesskey="278"]').css({
        'border-left': '4px solid #158751',
        'padding': '10px 20px',
        'margin-top': '10px',
        'background-color': '#ffffff'
    });

    // 美化链接样式（合并重复逻辑）
    $('.smfz13805316684, .ptln13805316684').css({
        'text-decoration': 'none',
        'color': '#158751',
        'transition': 'color 0.3s'
    }).hover(function () {
        $(this).css('color', '#0f4c3d');
    }, function () {
        $(this).css('color', '#158751');
    });

    // 卡片样式
    $('div.card').css({
        'padding': '20px',
        'background-color': '#f0f0f0',
        'border-radius': '10px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)'
    });

    // 标题样式
    $('div.biaoti, span.biaoti').css({
        'color': '#ffffff',
        'font-size': '16px',
        'font-weight': 'bold',
        'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'margin-bottom': '10px',
        'padding-top': '5px',
        'padding-bottom': '5px',
        'padding-left': '15px',
        'padding-right': '15px',
        'background-color': '#158751',
        'border-radius': '50px',
        'display': 'inline-block'
    });

    // 设置元素背景透明
    document.querySelectorAll('.top1410337372').forEach(function (el) {
        el.style.backgroundColor = 'transparent';
    });
});

// 原生JS等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 隐藏指定导航项
    var allLinks = document.getElementsByTagName('a');
    for (var i = 0; i < allLinks.length; i++) {
        if (allLinks[i].getAttribute('href') === '/product_lists_534.html') {
            allLinks[i].parentNode.style.display = 'none';
            break;
        }
    }

    // 替换链接文本为title属性
    var smfzLinks = document.getElementsByClassName('smfz13805316684');
    for (var j = 0; j < smfzLinks.length; j++) {
        smfzLinks[j].textContent = smfzLinks[j].title;
    }

    // 移除本地文件图片
    var images = Array.from(document.getElementsByTagName('img'));
    images.forEach(function (img) {
        if (img.src.includes('file://')) {
            img.parentNode.removeChild(img);
        }
    });

    // 设置元素宽度
    document.querySelectorAll('.main00000').forEach(function (element) {
        element.style.width = '1200px';
    });
    document.querySelectorAll('.jths13933870422').forEach(function (element) {
        element.style.width = '100%';
    });
    document.querySelectorAll('.top1410337372').forEach(function (element) {
        element.style.width = '1200px';
    });

    // 修复标题与"更多"按钮垂直居中问题
    const titleContainers = document.querySelectorAll('div[accesskey="531"] div div');
    titleContainers.forEach(container => {
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'space-between';
        container.style.width = '100%';
        container.style.paddingBottom = '10px';
        container.style.borderBottom = '1px solid #e8f5e9';
        
        const title = container.querySelector('.biaoti');
        if (title) {
            title.style.marginBottom = '0';
            title.style.fontSize = '18px';
            title.style.padding = '6px 20px';
        }
        
        const moreBtn = container.querySelector('a[title="环评公示"]');
        if (moreBtn) {
            moreBtn.style.margin = '0';
            moreBtn.style.padding = '4px 8px';
            moreBtn.style.color = '#158751';
            moreBtn.style.fontWeight = '500';
            moreBtn.style.textDecoration = 'none';
            moreBtn.style.border = '1px solid #158751';
            moreBtn.style.borderRadius = '4px';
            moreBtn.style.alignSelf = 'center';
            moreBtn.onmouseover = () => {
                moreBtn.style.background = '#158751';
                moreBtn.style.color = 'white';
            };
            moreBtn.onmouseout = () => {
                moreBtn.style.background = 'transparent';
                moreBtn.style.color = '#158751';
            };
        }
    });

    // 清理卡片冲突样式
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = '';
        card.style.padding = '';
        card.style.boxShadow = '';
        card.style.borderRadius = '';
        card.classList.add('bg-white', 'p-6', 'rounded-xl', 'shadow-sm', 'border', 'border-[#e8f5e9]');
    });

    // 优化链接行高
    const linkItems = document.querySelectorAll('.smfz13805316683');
    linkItems.forEach(item => {
        item.style.lineHeight = '1.6';
        item.style.padding = '10px 15px';
    });
});

// 页面加载完成后处理表格样式
window.onload = function () {
    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.width = '100%';
        var tableDiv = document.createElement('div');
        tableDiv.className = 'mdui-table';
        tables[i].parentNode.insertBefore(tableDiv, tables[i]);
        tableDiv.appendChild(tables[i]);
    }

    var cells = document.getElementsByTagName('td');
    for (var j = 0; j < cells.length; j++) {
        var style = cells[j].style;
        if (style.borderTop) {
            style.borderTop = '.0625rem solid rgb(var(--mdui-color-surface-variant))';
        }
        style.borderRight = '';
        style.borderLeft = '';
        style.borderBottom = '';
        style.width = '';
    }
};




