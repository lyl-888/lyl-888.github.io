---
title: NeRF论文阅读笔记
date: 2024/01/10
tags:
  - NeRF
  - 论文阅读
  - 计算机视觉
  - 神经渲染
categories:
  - 学术研究
cover: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop
---

# NeRF论文阅读笔记

## 论文信息
- **标题**: NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis
- **作者**: Ben Mildenhall, Pratul P. Srinivasan, Matthew Tancik, Jonathan T. Barron, Ravi Ramamoorthi, Ren Ng
- **发表**: ECCV 2020
- **PDF**: [下载论文](/docs/NeRF.pdf)

## 论文摘要

NeRF (Neural Radiance Fields) 是一种将场景表示为神经辐射场的新方法，用于新视角合成。该方法通过使用全连接深度网络来表示连续的场景，能够从2D图像输入中学习到3D场景的表示。

## 核心思想

NeRF的核心思想是：
1. 将3D场景表示为连续的神经辐射场
2. 使用MLP网络学习从3D坐标到颜色和密度的映射
3. 通过体渲染技术生成新视角的图像

## 技术细节

### 输入表示
- 3D坐标 (x, y, z)
- 视角方向 (θ, φ)

### 网络架构
- 位置编码
- 8层全连接网络
- 输出：颜色 (r, g, b) 和密度 σ

### 体渲染
使用经典的体渲染方程来合成图像：
```
C(r) = ∫ T(t) σ(r(t)) c(r(t), d) dt
```

## 实验结果

NeRF在多个数据集上取得了优异的结果：
- 合成数据集：高质量的新视角合成
- 真实场景：逼真的渲染效果
- 与其他方法相比：更好的细节保持

## 应用领域

- 新视角合成
- 3D场景重建
- 虚拟现实
- 增强现实
- 电影制作

## 个人思考

NeRF是一个非常有影响力的工作，它将深度学习与传统的计算机图形学技术相结合，为3D场景表示开辟了新的方向。其简单而有效的设计使得后续有很多改进工作。

## 相关资源

- [官方代码](https://github.com/bmild/nerf)
- [论文主页](https://www.matthewtancik.com/nerf)
- [相关论文列表](https://github.com/yenchenlin/awesome-NeRF)

---

*最后更新：2024年1月10日*
