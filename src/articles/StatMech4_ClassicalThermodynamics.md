---
subid: cl-thermo
title: Classical Thermodynamics
topics: stat
---

We can now connect all of our classical/macroscopic properties with our statistical ones

- **Internal energy, \\(U\\) or \\(E\\)** Instead of considering the internal kinetic energy of particles, in statistical mechanics, we rather look at the *average energy* of the whole system: \\[ \langle E \rangle = \sum_ν p_νE_ν \\]
- **Entropy, \\(S\\)** Entropy usually measure how disordered a system is, however in statistical mechanics, we instead look to the *Gibbs entropy*, which... is basically the exact same thing, not gonna lie \\[ S =  k_B \ln{Ω} \\]
- **Temperature, \\(T\\)** Temperature doesn't change, it's still our good friend we all know and love, except it's now got a fancy new definition \\[ \frac1{T}  =  \frac{\partial S}{\partial E} \bigg|_{V, N}\\]
- **Pressure, \\(P\\)** Now we consider the *average mechanical pressure* \\[ P = −\sum_ν p_ν \frac{ \partial E_ν}{ \partial V} \\]

We can also take a statistical mechanical look at the second law of thermodynamics. This states that a system’s entropy will always increase or remain the same. The system’s entropy is maximised at thermal equilibrium. An unequal distribution means there is a higher chance of it being in a certain microstate, meaning that the overall uncertainty/chaoticness of the system is lower. However, at thermal equilibrium, the chances are all the same, meaning maximum uncertainty and maximum entropy

### Recap of Thermodynamics

We have a system (za sisutemo), the surroundings (za saraundinguzo) and the boundary (za baundorii)

#### The zeroth law

"The zeroth law? Must have missed that bloody law, I didn't even know zero *had* an index form!"

Well apparantly, it does! But don't worry about having not learnt it, it's basically just common sense:

> **Zeroth Law of Thermodynamics** If two systems are in thermal equilibrium with a third system they must be in thermal equilibrium with each other.

#### The First Law

> **First Law of Thermodynamics** Energy is conserved

<div class="eqn"> \[
    dQ = dE + dW
\] </div>

Or for normal people:

<div class="eqn"> \[
    Q = E + W
\] </div>

#### The Second Law

> **Second Law of Thermodynamics** Heat can never pass from a colder to a warmer body without some other change, connected therewith, occurring at the same time.

***

- **Quasistatic Changes** If a change is slow enough, then we can consider the system as if it is only through equilibrium states
- **Reversible Changes** If a change is quasistatic and there is nothing to dissipate the energy, like friction or turbulence or resistance, then we can reverse the change.

If a change is reversible, then \\( dQ = TdS \\). Then the second law becomes

<div class="eqn"> \[
    TdS = dE + dW
\] </div>

The work done is pressure energy, \\( dW = PdV \\)

<div class="eqn"> \[
    TdS = dE + PdV
\] </div>

In general:

<div class="eqn"> \[
    TdS \geq dE + PdV
\] </div>

### Equilibrium

There are 3 things we need to consider

1. **HELMHOLTZ FREE ENERGY** \\[ F = E − TS \\]
2. **GIBBS FREE ENERGY** \\[ G = E − TS + PV \\]
3. **ENTHALPY** \\[ H = E + PV \\]

<div class="eqn"> \[ \begin{align}
    dF &= dE - TdS - SdT  \\[6pt]
        &\leq -PdV - SdT
\end{align} \] </div>

This means that the Helmholtz Free Energy is a function of volume and temperature, *\\( F = F(V, T) \\)*

We can do the same thing with Gibb's free energy:

<div class="eqn"> \[ \begin{align}
    dG &= dE - TdS - SdT +PdV + VdP \\[6pt]
        &\leq VdP - SdT
\end{align} \] </div>

This means that the Helmholtz Free Energy is a function of pressure and temperature, *\\( G = G(P, T) \\)*

<div class="eqn"> \[ \begin{align}
    dH &= dE +PdV + VdP  \\[6pt]
        &\leq TdS + VdP
\end{align} \] </div>

This means that the enthalpy is a function of pressure and entropy, *\\( ∆H = T∆S \\)*

### Thermodynamics and Microstates

We defined *thermal equilibrium* as the point where each microstate is equally likely, where \\( S \\) is a maximum. Let's prove that using statistical mechanics. We know that:

<div class="eqn"> \[
    S = -k_B \sum_\nu p_\nu \ln{p_\nu}, \quad \sum_{\nu=1}^\Omega p_\nu = 1
\] </div>

The probability of the \\( \Omega \\)th (omegath?) microstate is one take away the sum of all the previous microstates

<div class="eqn"> \[
    p_\Omega = 1 - \sum_{\nu=1}^{\Omega-1} p_\nu 
\] </div>

To maximise something, we take the derivative and set it to zero. In this case, that means \\( \frac{ \partial S }{ \partial p_\nu } = 0 \\).

<div class="eqn"> \[ \begin{align} \frac{ \partial S }{ \partial p_\nu } 
    &= -k_B \frac{ \partial \left( \sum_\nu p_\nu \ln{p_\nu} + p_\Omega \ln{p_\Omega} \right) }{ \partial p_\nu } \\[6pt]
    &= -k_B \ln{p_\nu} - k_B - (k_B \ln{p_\Omega} + k_B) \frac{ \partial p_\Omega }{ \partial p_\nu } 
\end{align} \] </div>

Since \\( \frac{ \partial p_\Omega }{ \partial p_\nu } = -1 \\)

<div class="eqn"> \[
    \ln{p_\Omega} = \ln{p_\nu} \quad \therefore \quad p_\Omega = p_\nu
\] </div>

#### Fixed volume and temperature

<div class="eqn"> \[
    dF \leq -PdV - SdT = 0
\] </div>

<div class="eqn"> \[
    F = \langle E \rangle - TS = \sum_\nu p_\nu E_\nu - k_B T \sum_\nu p_\nu \ln{p_\nu}
\] </div>


<div class="eqn"> \[ \begin{align} \frac{ \partial F }{ \partial p_\nu } 
    &= E_\nu + k_B T \ln{p_\nu} + k_B T + \left( E_\Omega + k_B T \ln{p_\Omega} + k_B T \right) \frac{ \partial p_\Omega}{ \partial p_\nu } \\[6pt]
    &= (E_\nu - E_\Omega) - k_B T \ln{\left( \frac{p_\nu}{p_\Omega} \right)} = 0
\end{align} \] </div>

That means

<div class="eqn"> \[
    p_\nu \propto e^{-\beta E_\nu}
\] </div>

#### Partition Function



<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ F=−k_BT \ln{Z} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



### TL;DR

-
