---
subid: stat-intro
title: Introduction to Statistical Mechanics
topics: stat
---

Hello and welcome to my summary of statistical mechanics! To give you a brief introduction, this is just a different way of looking at the physics we have already done. 

Up until now, we have relied on *thermodynamics* to describe the thermal properties of an object. We assume there is a unique state an object can be in, known as thermal equilibrium. At this thermal equilibrium, Pressure (\\(P\\)), entropy (\\(S\\)), temperature (\\(T\\)) and internal energy (\\(U\\)) are related by *empirical laws*. In other words, all the formulae we learn about regarding these quantities are most accurate at *thermal equilibrium*. In fact, they are built under the assumption of thermal equilibrium.

Instead of thinking of things in terms of macroscopic properties like temperature and pressure, statistical mechanics defines properties in terms of how likely a system’s *microstates* are.

"Microstate? What the cluck is a microstate?" I hear you ask?

A *microstate* is a specific configuration of a system: any way the particles in a system can arrange themselves. So their position, their energies, etc. This microscopic property of the system is consistent with its previously mentioned macroscopic properties. 

Here we introduce the *quantum oscillator*. Similar to how a classical oscillator moves around a particular location, a quantum oscillator describes an object which has an average energy, quantised in units of ℏω. 

To explain what a microstate is, we can take up a simple quantum system with four quantum oscillators and a total energy of 6ℏω. One possible combination of energies for the oscillators to have is 1ℏω, 1ℏω, 4ℏω, 0ℏω. You could also have 2ℏω, 2ℏω, 2ℏω, 0ℏω. In each case, the system as a whole has total energy 6ℏω, and is therefore a possible option. Each “possible option” is a microstate.

The microcanonical ensemble for any system is the complete list of possible microstates that it can have with energy \\( E \\), volume \\( V \\) and particle number \\( N \\). The total number of microstates a system can have is represented as \\( Ω \\). For example, in this example, there are 24 possible ways for the 6ℏω to be divided, meaning:

<div class=eqn> \[ \Omega( 6\hbar \omega ) = 24\] </div>

The more ways a system can exist, the more chaotic the system is. I mean, surely this just makes sense, because if a system only has two microstates, then it doesn’t really have much potential to spaz around. However, if it has a lot more microstates, it can do much crazier and more unpredictable things. This therefore, means that *the higher \\( Ω \\) is, the higher the entropy, \\( S \\)*. 

Naturally, somebody found a formula to describe this exact idea:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ S = k_B \ln{Ω} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


Since \\( k_B \\) is constant, we can see here that as \\( Ω \\) increases, \\( S \\) increases with it (logarithmically, not that it really matters tbf). One thing you will have to get used to in statistical mechanics (and physics generally tbh) is physicists using maths to explain something which is easily explained in English. 

When a system is in thermal equilibrium, we assume that every possible microstate is equally likely. And when you think about it, you don’t really have much choice. I mean, we don’t klnow anything about the system which would make any one state more likely than the other, so why the hell would we? Think about rolling a dice. Unless you know the dice is rigged, you will always assume that the odds of the dice landing on any side is 1/6, since there are six sides. Therefore, if we have Ω microstates, the likelihood of any state is 1/Ω

### TL;DR

-
