---
title: API 设计最佳实践
date: 2024/01/03
tags:
  - API
  - 设计
  - 最佳实践
categories:
  - 技术文档
---

# API 设计最佳实践

## RESTful API 设计原则

### 1. 资源命名
- 使用名词而非动词
- 使用复数形式
- 使用小写字母和连字符

```bash
# 好的例子
GET /api/users
GET /api/users/123
POST /api/users

# 不好的例子
GET /api/getUsers
GET /api/user/123
POST /api/createUser
```

### 2. HTTP 方法使用
- `GET`：获取资源
- `POST`：创建资源
- `PUT`：更新整个资源
- `PATCH`：部分更新资源
- `DELETE`：删除资源

### 3. 状态码规范
- `200`：成功
- `201`：创建成功
- `400`：请求错误
- `401`：未授权
- `403`：禁止访问
- `404`：资源不存在
- `500`：服务器错误

## 响应格式

### 统一响应格式
```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 实际数据
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

### 分页响应
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [...],
    "pagination": {
      "page": 1,
      "size": 10,
      "total": 100,
      "pages": 10
    }
  }
}
```

## 错误处理

### 错误响应格式
```json
{
  "code": 400,
  "message": "参数错误",
  "errors": [
    {
      "field": "email",
      "message": "邮箱格式不正确"
    }
  ],
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## 安全考虑

1. **认证授权**：使用 JWT 或 OAuth 2.0
2. **输入验证**：严格验证所有输入参数
3. **HTTPS**：强制使用 HTTPS
4. **限流**：防止 API 滥用
5. **日志记录**：记录所有 API 调用

## 版本控制

### URL 版本控制
```
/api/v1/users
/api/v2/users
```

### Header 版本控制
```
Accept: application/vnd.api+json;version=1
```

## 文档化

使用 OpenAPI/Swagger 规范编写 API 文档，包括：
- 接口描述
- 请求参数
- 响应格式
- 错误码说明
- 示例代码

---

*最后更新：2024年1月3日*