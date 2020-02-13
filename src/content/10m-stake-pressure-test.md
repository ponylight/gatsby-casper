---
layout: post
title: 10M Stake Pressure Test
image: img/science-in-hd-M9uO8rHEI0s-unsplash.jpg
videoSourceURL: https://youtu.be/WEShbiuEl9E
videoTitle: "EARTH Pool BlockHeigh"
author: earth
date: 2020-02-12T00:36:00.000Z
tags:
  - 10M
---

We had one 10M stake between Epoch 53 and Epoch 57, which won us Slots 7, 3, 4, 8, 9 for the days. 
Averagely, about 11M stakes is 1/1000 of the total stakes, so roughly should be 3/4 slots a day. 
This is like a hammer pressure test for EARTH pool. Thanks for the delegator.

There is some issue on the network, and I believe most of the pools have lost blocks. It happened on us as well. 
On Epoch 53, we had 1 block lost, E-54, 1, E-55, 3. We monitored every block creation. 
We even tried recompiling with Michael Fazio's patch. It became worse. We found out his code is probably good for
small VPS, not with own infrastructure. The connections to other peers was about 300, and it restarted the node twice
during the testing.

We went back to official code on E-56, and figured out we have block lost is because we occasionally 1 or 2 block behind. We increased the connection to peers, turned some other settings, built connection to most of nodes in network. On E-57, we had all 9 blocks  on chain.

Now we have over 2k connections established to distinct IP addresses. You can see from the video in our twits, 
we are always synchronized with max reported block height from http://PoolTool.io. Thanks for the 10M delegator, 
and I think 24 blocks should be a good return for 5 days.

