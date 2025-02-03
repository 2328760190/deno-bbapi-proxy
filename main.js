Deno.serve((req: Request) => handleRequest(req));

async function handleRequest(request) {
  // 目标服务器的 Host
  const targetHost = 'www.blackbox.ai';

  // 获取原始请求的 URL
  const originalUrl = new URL(request.url);

  // 构建新的 URL，只替换 Host 部分
  const targetUrl = new URL(originalUrl.toString());
  targetUrl.host = targetHost;

  // 创建一个新的请求，复制原始请求的信息，但使用新的 URL
    const modifiedRequest = new Request(targetUrl.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  });


  // 发送请求到目标服务器并获取响应
  const response = await fetch(modifiedRequest);

  // 返回响应给用户
  return response;
}
