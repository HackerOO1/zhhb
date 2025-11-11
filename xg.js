window。addEventListener('load'， function () {
    console.log('整个网页包括所有资源都已加载完成！');
    // alert("这是一条消息！");
});
$(document)。ready(function () {
    // 等待DOM加载完成后执行
    $('.top1416557911').remove(); // 删除所有类名为top1416557911的div元素
    $('.main00002').remove();
    $('.top1410001018').remove();
    $('.top1419992445,.bzyh106887981231,.wzjszc').remove();

    $('.zdnf1409557049, .zdnf14080947711, .zdnf14080947712, .top1419992445, .top1410014003, .top1408773220.dingbu').removeClass();

    $('[class="tmvl00005 neiyemian"]').removeClass('tmvl00005 neiyemian');
    $('[class="main00005 neiyemian"]').removeClass('main00005 neiyemian');
    $('[class="top1416557587 zuobiaoti"]').removeClass('top1416557587 zuobiaoti');
    $('[class="knep14080947711 zuobiaoti"]').removeClass('knep14080947711 zuobiaoti');
    $('[class="knep14080947712 zuobiaoti"]').removeClass('knep14080947712 zuobiaoti');
    $('[class="knep1409556320"]').addClass('biaoti');
    $('[class="lab13960025542"]').addClass('biaoti');
    $('[class="zdnf1409554445"]').addClass('biaoti');
    $('.knep1409556320').removeClass('knep1409556320');
    $('.lab13960025542').removeClass('lab13960025542');
    $('.zdnf1409554445').removeClass('zdnf1409554445');
    $('[class="top1416557647"]').removeClass('top1416557647');
    $('[class="top1417163320"]').removeClass('top1417163320');
    $('.zdnf1409567446.youyemian').removeClass('zdnf1409567446 youyemian');
    $('.top8888888888').removeClass('top8888888888');
    // 然后给这些元素添加新的类'mdui-card'
    $('.top1416557278').addClass('card');
    $('.top1416557278').removeClass('top1416557278');
    $('.smfz13805316682').removeClass('smfz13805316682');
    $('.main00003').removeClass('main00003');
    $('.top1408594199.dibu').removeClass('top1408594199 dibu');
    $('.xvgi1408587452').removeClass('xvgi1408587452');
    $('.xvgi14080942120.daohang').removeClass('xvgi14080942120.daohang');
    $('.xvgi14080942120.daohang').removeClass('xvgi14080942120 daohang');
    $('.xvgi14080942121.daohang').removeClass('xvgi14080942121 daohang');
    $('.xvgi14080942122.daohang').removeClass('xvgi14080942122 daohang');
    $('.top1410514125').removeClass('top1410514125');

    $('.top1409975508').removeClass('top1409975508');
    $('.inside_div').removeClass('inside_div');
    $('.lab13960025030').removeClass('lab13960025030 youbiaoti');
    $('.lab13960025031').removeClass('lab13960025031 youbiaoti');
    $('.lab13960025032').removeClass('lab13960025032 youbiaoti');
    $('.main00004.neiyemian').removeClass('main00004 neiyemian');
    $('.ptln13805316682').removeClass('ptln13805316682');

    // 选择导航菜单的ul元素
    $('#topmenuid').css({
        'listStyle': 'none',
        'padding': '0',
        'margin': '0',
        'backgroundColor': '#158751', // 设置背景颜色为#158751
        'color': 'white' // 设置文字颜色，以便在深色背景上可见
    });

    // 选择所有的li元素并设置样式
    $('#topmenuid li').css({
        'display': 'inline-block', // 使列表项水平排列
        'margin': '0',
        'padding': '10px 20px' // 设置列表项内边距
    });

    // 选择所有的a元素并设置样式
    $('#topmenuid a').css({
        'display': 'block',
        'color': 'white', // 设置链接文字颜色
        'textDecoration': 'none',
        'padding': '5px 10px', // 设置链接内边距
        'transition': 'background-color 0.3s' // 平滑过渡效果
    })

    // 移除所有不必要的内嵌样式和类
    $('#topmenuid, #topmenuid li, #topmenuid a').each(function () {
        this.style.borderRadius = '';
        this.style.boxShadow = '';
        $(this).removeClass();
    });

    // 为当前激活的链接设置不同的背景色
    $('#current').css({
        'backgroundColor': '#0f4c3d' // 激活链接的背景颜色
    });



    // 移除所有直接子元素的类名
    $('div.top1410009291 > div > div > div').removeClass();

    // 美化最外层div
    $('div.top1410009291').css({
        'padding': '20px', // 内边距
        'background-color': '#f0f0f0', // 背景颜色
        'border-radius': '10px', // 边框圆角
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)' // 轻微的阴影效果
    });

    // 添加一个边框和背景色到服务描述的div
    $('div[accesskey="278"]').css({
        'border-left': '4px solid #158751', // 左侧边框
        'padding': '10px 20px', // 内边距
        'margin-top': '10px', // 上边距
        'background-color': '#ffffff' // 背景颜色
    });

    // 美化链接列表
    $('.smfz13805316684').each(function () {
        // 移除链接的默认样式
        $(this).css({
            'text-decoration': 'none', // 去除下划线
            'color': '#158751', // 设置链接颜色为#158751
            'transition': 'color 0.3s' // 设置颜色变化的过渡效果
        }).hover(function () {
            // 鼠标悬停时的样式，颜色变深
            $(this).css('color', '#0f4c3d'); // 可以选择一个较深的颜色作为悬停效果
        }, function () {
            // 鼠标离开时恢复原来的样式
            $(this).css('color', '#158751'); // 恢复为#158751
        });
    });

    // 美化链接列表
    $('.ptln13805316684').each(function () {
        // 移除链接的默认样式
        $(this).css({
            'text-decoration': 'none', // 去除下划线
            'color': '#158751', // 设置链接颜色为#158751
            'transition': 'color 0.3s' // 设置颜色变化的过渡效果
        }).hover(function () {
            // 鼠标悬停时的样式，颜色变深
            $(this).css('color', '#0f4c3d'); // 可以选择一个较深的颜色作为悬停效果
        }, function () {
            // 鼠标离开时恢复原来的样式
            $(this).css('color', '#158751'); // 恢复为#158751
        });
    });

    // 美化最外层div
    $('div.card').css({
        'padding': '20px', // 内边距
        'background-color': '#f0f0f0', // 背景颜色
        'border-radius': '10px', // 边框圆角
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)' // 轻微的阴影效果
    });
    // 美化标题
    $('div.biaoti, span.biaoti').css({
        'color': '#ffffff', // 文字颜色为白色
        'font-size': '16px', // 设置字体大小为18px
        'font-weight': 'bold', // 字体加粗
        'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.3)', // 文字阴影
        'margin-bottom': '10px', // 底部外边距
        'padding-top': '5px', // 上内边距减小
        'padding-bottom': '5px', // 下内边距减小
        'padding-left': '15px', // 左内边距增加
        'padding-right': '15px', // 右内边距增加
        'background-color': '#158751', // 背景颜色
        'border-radius': '50px', // 圆角边框
        'display': 'inline-block' // 内联块级显示
    });

    // // 选择页面中具有旧类名的所有div元素
    // var oldDivs = document.querySelectorAll('.tmvl138053175410');

    // // 遍历所有找到的div元素
    // oldDivs.forEach(function (div) {
    //     // 替换类名为新的类名mdui-prose
    //     div.className = 'mdui-prose';
    // });

    // 选择页面中所有具有类名 top1410337372 的元素
    var elements = document.querySelectorAll('.top1410337372');

    // 遍历所有找到的元素，并设置背景颜色为透明
    elements.forEach(function (el) {
        el.style.backgroundColor = 'transparent';
    });


});


// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 使用getElementsByTag获取所有的<a>元素
    var allLinks = document.getElementsByTagName('a');

    // 循环遍历所有的<a>元素
    for (var i = 0; i < allLinks.length; i++) {
        // 检查<a>元素的href属性是否匹配特定的URL
        if (allLinks[i].getAttribute('href') === '/product_lists_534.html') {
            // 如果匹配，找到这个<a>元素的父元素<li>
            var liElement = allLinks[i].parentNode;

            // 隐藏找到的<li>元素
            liElement.style.display = 'none';
            break; // 找到后就不需要继续循环了，退出循环
        }
    }


    // 选择所有具有类smfz13805316684的<a>元素
    var allLinks = document.getElementsByClassName('smfz13805316684');

    // 循环遍历所有找到的<a>元素
    for (var i = 0; i < allLinks.length; i++) {
        var link = allLinks[i];
        // 将每个<a>的title属性内容设置为它的文本内容
        link.textContent = link.title;
    }


    // // 选择<body>元素
    // var body = document.body;
    // // 设置背景颜色为透明
    // body.style.backgroundColor = 'transparent';
    // body.style.setProperty('background-color', 'transparent', 'important');


    // 使用Array.from()将HTMLCollection转换为数组
    var images = Array.from(document.getElementsByTagName('img'));

    images.forEach(function (img) {
        if (img.src.includes('file://')) {
            img.parentNode.removeChild(img);
        }
    });

    // 使用querySelectorAll获取所有类名为'main00000'的元素
    var elements = document.querySelectorAll('.main00000');

    // 遍历这些元素
    elements.forEach(function (element) {
        // 设置每个元素的宽度为1200像素
        element.style.width = '1200px';
    });
    // 使用querySelectorAll获取所有类名为'jths13933870422'的元素
    var elements = document.querySelectorAll('.jths13933870422');

    // 遍历这些元素
    elements.forEach(function (element) {
        // 设置每个元素的宽度为100%
        element.style.width = '100%';
    });
    document.querySelectorAll('.top1410337372').forEach(function (element) {
        // 设置每个元素的宽度为100%
        element.style.width = '1200px';
    });


    
});


window.onload = function () {
    // 上述JavaScript代码放这里
    // 选择页面中所有的table元素
    var tables = document.getElementsByTagName('table');

    // 遍历所有找到的table元素
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.width = '100%';
        // 创建一个新的div元素
        var tableDiv = document.createElement('div');
        // 为新的div元素添加mdui-table类
        tableDiv.className = 'mdui-table';
        // 将新创建的div插入到表格的原始位置前
        tables[i].parentNode.insertBefore(tableDiv, tables[i]);
        // 将表格移动到新创建的div中
        tableDiv.appendChild(tables[i]);
    }
    // 选择页面中所有的td元素
    var cells = document.getElementsByTagName('td');

    // 遍历所有找到的td元素
    for (var i = 0; i < cells.length; i++) {
        // 获取当前td的样式对象
        var style = cells[i].style;
        // 删除border-top样式
        if (style.borderTop) {
            style.borderTop = '.0625rem solid rgb(var(--mdui-color-surface-variant))';
        }

        // 删除border-right样式
        if (style.borderRight) {
            style.borderRight = '';
        }

        // 删除border-left样式
        if (style.borderLeft) {
            style.borderLeft = '';
        }
        // 删除border-left样式
        if (style.borderBottom) {
            style.borderBottom = '';
        }
        // 删除width样式
        if (style.width) {
            style.width = '';
        }
    }
};
// 修复标题与"更多"按钮垂直居中问题
document.addEventListener('DOMContentLoaded', function() {
    // 定位环评公示卡片的标题容器
    const titleContainers = document.querySelectorAll('div[accesskey="531"] div div');
    titleContainers.forEach(container => {
        // 为容器添加Flex布局，实现垂直居中
        container.style.display = 'flex';
        container.style.alignItems = 'center'; // 垂直居中
        container.style.justifyContent = 'space-between'; // 标题居左，更多居右
        container.style.width = '100%'; // 占满宽度
        container.style.paddingBottom = '10px';
        container.style.borderBottom = '1px solid #e8f5e9'; // 底部分隔线
        
        // 调整标题样式（去除多余margin，确保居中）
        const title = container.querySelector('.biaoti');
        if (title) {
            title.style.marginBottom = '0'; // 清除底部margin，避免影响垂直对齐
            title.style.fontSize = '18px'; // 稍大一点更协调
            title.style.padding = '6px 20px'; // 调整内边距
        }
        
        // 调整"更多"按钮样式（垂直居中对齐）
        const moreBtn = container.querySelector('a[title="环评公示"]');
        if (moreBtn) {
            moreBtn.style.margin = '0';
            moreBtn.style.padding = '4px 8px';
            moreBtn.style.color = '#158751';
            moreBtn.style.fontWeight = '500';
            moreBtn.style.textDecoration = 'none';
            moreBtn.style.border = '1px solid #158751';
            moreBtn.style.borderRadius = '4px';
            moreBtn.style.alignSelf = 'center'; // 强制垂直居中
            // 添加hover效果
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

    // 清理卡片冲突样式（确保背景色统一）
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // 移除冲突的内联样式，使用Tailwind类定义
        card.style.backgroundColor = '';
        card.style.padding = '';
        card.style.boxShadow = '';
        card.style.borderRadius = '';
        // 确保卡片样式统一
        card.classList.add('bg-white', 'p-6', 'rounded-xl', 'shadow-sm', 'border', 'border-[#e8f5e9]');
    });

    // 优化链接行高，确保内容居中
    const linkItems = document.querySelectorAll('.smfz13805316683');
    linkItems.forEach(item => {
        item.style.lineHeight = '1.6'; // 合适的行高确保文字垂直居中
        item.style.padding = '10px 15px'; // 调整内边距
    });
});
