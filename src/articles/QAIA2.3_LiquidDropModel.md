---
subid: liquid-drop
title: The Liquid Drop Model
topic: qaia2
---

The *Liquid Drop Model* is based on the, in my opinion, comically childish assumption that nuclei kinda sorta look like little water drops, and therefore

### Properties of nuclear matter

#### 1. Nuclei have hundreds of nucleons

Your average nucleus has to the order of about 100 nucleons (nucleons meaning protons and neutrons, just anything which goes in the nucleus). Of course, you have atoms with many more nuclei (like plutonium) and atoms with manu less (like hydrogen), but as a kind of ball park average, 100 will do.

#### 2. The 'unified mass unit'

The unified mass unit, \\( u = 1.66 \\times 10^{-27} \\), is the average mass of a single nucleon. So the mass of a proton and the mass of a neutron are both \\( 1.66 \\times 10^{-27} \\)

<div class=eqn> \[ m_p = m_n = u. \] </div>

Now technically protons are a teensy weensy bit bigger than neutrons, but they are close enough that it's easier to just approximate them like this. This means that we can determine the mass of the nucleus just by multiplying \\( u \\) by the total number of nucleons:


<div class=eqn> \[ m_\text{nucleus} = Au \] </div>

where \\( A \\) is the total number of nucleons, which is equal to the number of protons \\( Z \\) plus the number of neutrons \\( N \\). Heaven knows why neutrons were given a sensible letter \\( N \\) while protons were given a stupid letter \\( Z \\), but whatever, we ain't got time for that.

#### 3. Nuclei are spherical

If you take a nucleus, especially a really big one, it's near enough a sphere that we might as well just pretend it is one.

This sphere has a radius \\( R = R_0 \\sqrt[3]{A} \\), where \\( R_0 \\) is \\( 1.2 \\times 10^{-15} \\). It also has density

### The Liquid Drop Model

The first observation is that, when we have decently large nuclei (of the order of 100 like I was on about before), the binding energy per nucleon is near enough constant:

<div class=eqn> \[ \frac{E_B}A \approx a_V \] </div>

So just by simple rearranging, we get as an acceptable first approximation

<div class=eqn> \[ E_B \approx a_V A \] </div>

What this basically says is that in general, the larger the nucleus, the more binding energy the nucleons have. This is our starting point, and we call \\( a_V A \\) the *volume term*.

And whilst this is a good enough starting approximation, you'll be pleased to know it's not actually the most accurate one. There are a bunch of other things we must also take into consideration.

For our next consideration, we know nucleons are bound together by the strong nuclear force the other nucleons provide. However, if a nucleon is at the surface, it has less nucleons around it to bind it together, meaning it isn't bound as tightly. That means particles on the surface have less binding energy, meaning we must subtract energy.

We're saying that the nucleons at a larger radius have lower binding energy, meaning this next term should be proportional to the surface element. 

The volume of a sphere is proportional to \\( R^3 \\) <span class="formula-emph">\\( \\mathbf{\\left[ V = \frac43 \pi R^3 \\right]}  \\)</span>, and since from earlier we established that the radius of our imaginary water drop nuclei are proportional to the *cube root* of \\(A\\), by cubing it we get that the volume of our drops are proportional to \\(A\\).

The surface area of a sphere is proportional to \\( R^2 \\) <span class="formula-emph">\\( \\mathbf{\\left[ S = \frac23 \pi R^2 \\right]}  \\)</span>. Therefore by using the same logic as before, the surface area is proportional to the cube root of \\(A\\) squares, or \\(A^\frac23\\). That gives us the second term in our approximation:

<div class=eqn style="color: var(--accent)"> \[ E_B \approx \style{opacity: 30%}{a_V A} - a_S A^\frac23 \] </div>

However the strong nuclear force isn't the only force there. I mean the whole point of even introducing it in the first place was to explain how the protons can stay together despite the electromagnetic force.

The Coulomb force is simply:

<div class=eqn> \[ F = k \frac{q_1 q_2}r \] </div>

We know protons have charge \\( q = 1.6 \\times 10^-{27} \\), but it turns out the charge doesn't really matter. Watch this!

Every single proton has a charge \\( q \\), and each proton feels a force from \\( Z - 1 \\) other protons. That means \\( q_1 = q \\) and \\( Q_2 = (Z-1)q \\). And since there are \\( Z \\) protons altogether, the total force will be \\( Z \\) times this amount. That gives us:

<div class=eqn> \[ F = k \frac{q^2 Z(Z+1)}r \] </div>

Since \\( k \\) and \\( q \\) are both constants, we can absorb them into a new constant, \\( a_C \\). And we know radius is proportional to \\(A^\frac13\\), meaning *one over* \\( r \\) is proportional to one over \\(A^\frac13\\), or \\(A^{-\frac13}\\).

That gives us our *Coulomb term*, or as I like to call it, the *air conditioning term* (since the constant is \\(a_C\\), childish I know, I'm sorry...)

<div class=eqn style="color: var(--accent)"> \[ E_B \approx \style{opacity: 30%}{a_V A - a_S A^\frac23} - a_C \frac{Z(Z+1)}{A^\frac13} \] </div>

It seems like our approximation is coming together quite well, although we've now hit a quite annoying point, because we can no longer use any of the simple physics we know to probe the approximation anymore. We have to rely simply on what we see from data now. 

Then again, it's still pretty simple. Our first experimental observation is that nuclei with an equal amount of protons and neutrons <span class="formula-emph">\\( \\mathbf{\\left[ Z = N, \ \\text{or} \ Z-N = 0 \\right]}  \\)</span> seems to be more stable (and hence have *higher* binding energy) than nuclei which are proton or neutron heavy.

Now you might be tempted to think that that means our next term is proportional to \\( Z-N \\), and I personally think it should. But it turns out it's actually proportional to \\( (Z-N)^2 \\). 

Why the bloody hell they do this? Personally I think this is a bit daft, but the reason they do this is to make sure that we can't get a negative value. So having one more proton or one more neutron won't make a difference.

Whilst that makes sense on paper... did scientists just forget about the absolute value operator? Why not just say \\( |Z-N| \\), what exactly is the purpose of squaring it? Because now the value is different?

Anyway, it also just so happens that nuclei with larger volumes are less bothered by this affect, so we divide our scandelous \\( (Z-N)^2 \\) term by \\( A \\) to reflect this. That leaves us with our *asymmetry* term:

<div class=eqn style="color: var(--accent)"> \[ E_B \approx \style{opacity: 30%}{a_V A - a_S A^\frac23 - a_C \frac{Z(Z+1)}{A^\frac13}} - a_A \frac{(Z-N)^2}A  \] </div>

And this final consideration is a bit of a weird one: again, for some strange reason, the binding energy changes depending on whether there are even or odd amounts on protons and neutrons.

If there is an odd amount of protons and an even amount of neutrons – or vice versa – then nothing happens. However, if there are an even number of both protons and neutrons, then the binding energy increases. By contrast, if there is an *odd* number of both protons and neutrons, the binding energy decreases.

This gives us the pairing term:

<div class=llarge-eqn style="color: var(--accent)"> \[ E_B \approx \style{opacity: 30%}{a_V A - a_S A^\frac23 - a_C \frac{Z(Z+1)}{A^\frac13} - a_A \frac{(Z-N)^2}A} \begin{cases} &+ a_P A^\frac12 &\text{both even} \\[6pt] &+ 0 &\text{one even, other odd} \\ &- a_P A^\frac12 &\text{both odd} \end{cases}  \] </div>

And there we have it!

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box llarge-eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_B \approx a_V A - a_S A^\frac23 - a_C \frac{Z(Z+1)}{A^\frac13} - a_A \frac{(Z-N)^2}A \begin{cases} &+ \, a_P A^\frac12 &\text{both even} \\[2pt] &+ \, 0 &\text{one even, other odd} \\ &- \, a_P A^\frac12 &\text{both odd} \end{cases}. \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Liquid Drop Model 
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### TL;DR

- Nuclei are drippy as hell.
- The binding energy can be approximated with a volume, surface, Coulomb, asymmetry and pairing term.
- The volume term reflects how bigger nuclei have higher binding energy.
- The surface term reflects how nucleons at the surface are bound less tightly.
- The coulomb term probes the electrostatic repulsion.
- The asymmetry term reflects how nuclei with an even amount of protons and neutrons are more stable.
- The pairing term reflects how binding energy increases when the proton and neutron numbers are both even, decreases when they are both odd, and stays the same if one is even and the other is odd.

And remember: Air conditioning


