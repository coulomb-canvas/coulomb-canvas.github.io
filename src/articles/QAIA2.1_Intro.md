---
subid: qaia2-intro
title: Introduction to QAIA 2
topic: qaia2
---

It seems that one Quantum Module wasn't enough.

If you did A-Level Chemistry, some of these topics should be a lot more familiar to you

But first, a quick recap just so we are on the same page:




### Pauli Exclusion Principle

Now this set of formulae may confuse you, so let me do some explaining:

You may be wondering what difference moving the variables makes. After all, think of a function like \\( f(x, t) = 2x + t \\). All that means is that the function \\( f \\) has an \\( x \\) in it and a \\( t \\) in it. Therefore it wouldn't make a difference if I instead said \\( f(t, x) = 2x + t \\). The order of the x and t in the function shouldn't matter right?

Likewise, all equation 1 tells us is that, for a given wave function, it depends of the positions and spins of all the particles in the system (including particles a and b). So the order in which you put them shouldn't matter.

Well... that's not quite true. In general, \\( f(x, t) \\) and \\( f(t, x) \\) *aren't* actually the same thing

Put simply, the *Pauli exclusion principle* states that two fermions cannot take the same state. 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box large-eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Psi(\vec{r}_1, \sigma_1; \; \cdots \; ; \; \vec{r}_a, \sigma_a; \; \cdots \; ; \; \vec{r}_b, \sigma_b, \cdots) = -\Psi(\vec{r}_1, \sigma_1; \; \cdots \; ; \; \vec{r}_b, \sigma_b; \; \cdots \; ; \; \vec{r}_a, \sigma_a, \cdots). \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Pauli Exclusion Principle
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

