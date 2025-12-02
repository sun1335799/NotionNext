// 处理外部链接的函数
function handleExternalLinks() {
  const links = document.querySelectorAll('a[href^="http"]');
  links.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', handleExternalLinks);

// 监听页面变化(处理动态加载的内容)
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver(handleExternalLinks);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// 延迟执行,确保内容已加载
setTimeout(handleExternalLinks, 1000);
setTimeout(handleExternalLinks, 3000);
