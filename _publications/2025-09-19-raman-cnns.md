---
title: "Reevaluating Convolutional Neural Networks for Spectral Analysis: A Focus on Raman Spectroscopy"
collection: publications
category: manuscripts
permalink: /publication/2025-09-19-raman-cnns
excerpt: 'This study revisits how convolutional neural networks handle Raman spectra, showing that their performance depends strongly on pooling, training strategy, and dataset size—factors that are critical for autonomous spectroscopic instruments in planetary and ocean exploration.'
date: 2025-09-19
venue: 'ACS Earth and Space Chemistry'
paperurl: 'https://doi.org/10.1021/acsearthspacechem.5c00136'
citation: 'Deniz Soysal, Xabier Garcia-Andrade, Laura E. Rodriguez, Pablo Sobron, Laura M. Barge, Renaud Detry. (2025). &quot;Reevaluating Convolutional Neural Networks for Spectral Analysis: A Focus on Raman Spectroscopy.&quot; <i>ACS Earth and Space Chemistry</i>. DOI: 10.1021/acsearthspacechem.5c00136.'
logourl: '/images/raman-cnn-toc.svg'
---

<p style="font-size:1.3em; margin:0.5em 0;">
  🔗 <a href="https://doi.org/10.1021/acsearthspacechem.5c00136" target="_blank"><strong>Read the paper</strong></a>
</p>

![Graphical TOC](/images/raman-cnn-toc.svg)

This paper provides an evaluation of convolutional neural networks (CNNs) for Raman spectroscopy. Key contributions:  

- **Clarifying inductive bias:** We examine how translational invariance, built into CNNs, influences spectral analysis.  
- **Pooling as a control knob:** By adjusting pooling, we tune the trade-off between robustness to peak shifts and sensitivity to subtle features.  
- **Learning with few labels:** Semi-supervised generative and contrastive approaches enable strong performance even with limited ground-truth data.  
- **Transferability:** Pretrained models can adapt rapidly to new mineral datasets, a capability highly relevant for planetary missions and remote field deployments.  

The results highlight how careful design choices make CNNs not just viable, but practical tools for **autonomous Raman instruments** operating in space and extreme environments.  
