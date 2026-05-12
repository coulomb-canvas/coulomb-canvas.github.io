---
subid: separation
title: Separation of Variables
topic: maths2
---

### The 1D Wave Equation

<div class=eqn> \[ \frac{ \partial^2 \xi}{ \partial t^2} = c^2 \frac{ \partial^2 \xi}{ \partial x^2} \] </div>

We propose we can split it:

<div class=eqn> \[ \xi(x, t) = X(x) T(t) \] </div>

Put that in:

<div class=eqn> \[ \frac{ \partial^2 T(t) }{ \partial t^2}X(x) = c^2 \frac{ \partial^2 X(x)}{ \partial x^2} T(t)\] </div>

Divide both sides by \\(c^2X(x)T(t)\\):

<div class=eqn> \[ \frac1{c^2T(t)} \frac{ \partial^2 T(t) }{ \partial t^2} = \frac1{X(x)}\frac{ \partial^2 X(x)}{ \partial x^2}\] </div>

The left hand side only depends on time, and the right hand side only depends on position. The only way this can be true is if both sides are equal to some value, which we will call \\( \\alpha_S\\)

<div class=eqn> \[ \frac1{c^2T(t)} \frac{ \partial^2 T(t) }{ \partial t^2} = \frac1{X(x)}\frac{ \partial^2 X(x)}{ \partial x^2} = \alpha_S \] </div>

Then by rearranging:

<div class=eqn> \[ \begin{align*}
\frac{d^2 T(t)}{dt^2} &= \alpha_{\mathrm{S}} \, c^2 \, T(t) \ , \\[6pt]
\frac{d^2 X(x)}{dx^2} &= \alpha_{\mathrm{S}} \, X(x) \ .
\end{align*} \] </div>

Now we're going to do something slightly odd. Our solution for \\( \\xi(x, t) \\) will depend on our solutions for \\(X(x)\\) and \\(T(t)\\), which will depend on the value of \\( \\alpha_S \\). That means, if we want a general solution for \\( \\xi(x, t) \\), we have to sum up all the possible values of \\( \\xi(x, t) \\) for each possible value of \\( \\alpha_S \\). 

To do this, we take our \\( \\xi(x, t) \\), and integrate it:

<div class=eqn> \[ \begin{align*}
\xi(t, x) &= \int_{-\infty}^{+\infty} \xi(t, x; \alpha_S) \, d\alpha_S \\[6pt]
&= \int_{-\infty}^{+\infty} T(t; \alpha_S) X(x; \alpha_S) \, d\alpha_S \ .
\end{align*} \] </div>

And here we have our issue. I thought \\( \\alpha_S \\) was a constant? How the bloody hell are we supposed to integrate something with respect to a constant?

Well, you are half right. Technically \\( \\alpha_S \\) is a constant, but it's only a constant in the context of the system we are measuring. It's not a universal constant like \\( c \\) or \\( g \\) for instance. For any given system, there are infinitely many potential values of \\( \\alpha_S \\) which could serve as a solution to the equation.

That's why we have the semicolon before \\( \\alpha_S \\): It basically distinguished between the actual variables (which are time and position in this case) and the *parametres* which label different modes (i.e. \\( \\alpha_S \\) in this case). By integrating over all the potential modes, you get the solution for \\( \\xi \\).

Think back to [wave packets](https://coulomb-canvas.github.io/subtopic.html?subid=quantum-mechanics&topic=quantum1&year=1) in the first year Quantum Mechanics I topic. We were able to take a wave over infinite space and turn it into a particle by copy-pasting a bunch of them with slightly different wavenumbers. That means...

#### Case 1: \\(α_S\\) = 0

This is the easiest case, when \\(α_S\\) is 0, then our two differential equations from before become 0 too:

<div class=eqn> \[ \begin{align*}
\frac{d^2 T(t)}{dt^2} &\style{opacity:30%}{= α_S \, c^2 \, T(t)} = 0 \ , \\[6pt]
\frac{d^2 X(x)}{dx^2} &\style{opacity:30%}{= α_S \, X(x)} = 0 \ .
\end{align*} \] </div>

To get our solutions, we just have to integrate zero twice, which gives us solutions in the form \\(Ax + B\\). 

<div class=eqn> \[ \begin{align*}
X(x;0) = A_0 t + B_0 \ , \\[6pt]
T(t;0) = C_0 t + D_0 \ .
\end{align*} \] </div>

So now we know what \\(X(x)\\) and \\(T(t)\\) are, we can get \\( \\xi(x, t) \\) just by times-ing them together:

<div class=eqn> \[ \xi(x, t; 0) = (A_0 t + B_0)(C_0 t + D_0) \] </div>


​That was easy, next case:

#### Case 2: \\(α_S\\) > 0

<div class=eqn> \[ \begin{align*}
\frac{d^2 X(x)}{dx^2} &= κ^2 \, X(x) \ , \\[6pt]
\frac{d^2 T(t)}{dt^2} &= κ^2 \, c^2 \, T(t) \ .
\end{align*} \] </div>

They have these solutions:

<div class=eqn> \[ \begin{align*}
X(x) = A_κ e^{κx} + B_κ e^{−κt} \ , \\[6pt]
T(t) = C_κ e^{cκt} + D_κ e^{−cκt} \ .
\end{align*} \] </div>

That means:

<div class=large-eqn> \[
\xi(t, x; \alpha_S > 0) = \int_{0}^{\infty} \left( C_{\kappa} e^{c \kappa t} + D_{\kappa} e^{-c \kappa t} \right) \left( A_{\kappa} e^{\kappa x} + B_{\kappa} e^{-\kappa x} \right) \, d\kappa \ .
\] </div>

#### Case 3: \\(α_S\\) < 0

<div class=eqn> \[ \begin{align*}
\frac{d^2 X(x)}{dx^2} &= -k^2 \, X(x) \ , \\[6pt]
\frac{d^2 T(t)}{dt^2} &= -k^2 \, c^2 \, T(t) \ .
\end{align*} \] </div>

This has solutions:

<div class=eqn> \[ \begin{align*}
X(x) = A_k \cos{(κx)} + B_k \sin{(κt)} \ , \\[6pt]
T(t) = C_k \cos{(cκt)} + D_k \sin{(cκt)} \ .
\end{align*} \] </div>

Which means we get:

<div class=llarge-eqn> \[ \xi(t, x; \alpha_S < 0) = \int_{0}^{\infty} \left[ C_k \cos(ckt) + D_k \sin(ckt) \right] \left[ A_k \cos(kx) + B_k \sin(kx) \right] \, dk \ . \] </div>

<div class=method>
    <h5>METHOD: <span style="color:yellow; font-style: italic;">Seperation of Variables</span></h5>
    <hr style="margin:0px; border-width:0.2vw; color:yellow">
    <div class=method-step>
    <h6>Step 1</h6>
        <div class=method-subtitle>Split the variable into a distance function and a time function</div>
        <p>Take whatever variable you have, and split it into \( X(x) \) and \( T(t) \). </p>
        <div class=eqn>\[ \phi(x,t) = X(x)T(t)\]</div>
    </div><div class=method-step>
    <h6>Step 2</h6>
        <div class=method-subtitle>Rearrange the equation to have all the time-dependant variables on one side and any distance-dependant variables on the other side</div>
        <p>Put all the X's on one side and all the T's on the other side.</p>
    </div><div class=method-step>
    <h6>Step 3</h6>
        <div class=method-subtitle>Set both sides to some constant</div>
        <p>The only way this can be true is to set both sides of the equation to some constant.</p>
    </div><div class=method-step>
    <h6>Step 4</h6>
        <div class=method-subtitle>Set the constant to be zero and work out the solutions</div>
        <p>This is the easiest scenario. If we have \( f''(x) = 0 \), then the solution for \( f(x) \) is \( Ax + B \). If there is \( f'(x) = 0 \), then it's just a constant, which can be absorbed into the \( Ax + B \). Then to get the solution, you multiply the X solution and the T solution together. In general, that is: </p>
        <div class=eqn>\[ X(x)T(t) = (Ax + B)(Ct + D) \]</div>
    </div><div class=method-step>
    <h6>Step 5</h6>
        <div class=method-subtitle>Set the constant to be more than zero ( \( \alpha_S = \kappa^2 \) ) and work out the solutions</div>
        <p>Set \( \alpha_S \) to a positive value (we pick \( k^2 \)). For first order equations, the solution becomes \( A_κ e^{κx} + B_κ e^{−κx} \). Giving a general: </p>
        <div class=eqn>\[ X(x)T(t) = (A_κ e^{κx} + B_κ e^{−κx})(C_κ e^{κt} + D_κ e^{−κt}) \]</div>
    </div><div class=method-step>
    <h6>Step 6</h6>
        <div class=method-subtitle>Set the constant to be less than zero ( \( \alpha_S = -k^2 \) ) and work out the solutions</div>
        <p>Set \( \alpha_S \) to a negative value (we pick \( -k^2 \)). The solutions becomes complex exponentials \( A_κ e^{κx} + B_κ e^{−κx} \), which are just sines and cosines. Giving a general: </p>
        <div class=eqn>\[ X(x)T(t) = \left[ C_k \cos(ckt) + D_k \sin(ckt) \right] \left[ A_k \cos(kx) + B_k \sin(kx) \right] \]</div>
    </div><div class=method-step>
    <h6>Step 7</h6>
        <div class=method-subtitle>Sum the 3 potential solutions together</div>
    </div><div class=method-step>
    <h6>Step 8</h6>
        <div class=method-subtitle>Use boundary conditions to simplify the expression</div>
        <p>For example, if we have a diffusion equation, we know that the constant at the front must be negative. Therefore it makes no sense to consider positive solutions. 
    </div>
</div>

***

To get the full solution, we just add the three together. This sounds easy in theory until you actually realise how cooked our three solutions actually are:

<div class=eqn style="font-size:1.2vw; padding-left:0; padding-right:0"> \[ \begin{align*}
\xi(t, x) &= \xi(t, x; \alpha=0) + \xi(t, x; \alpha>0) + \xi(t, x; \alpha < 0) \ , \\[6pt]
&= (A_0 t + B_0)(C_0 t + D_0) + \int_{0}^{\infty} \left( C_{\kappa} e^{c \kappa t} + D_{\kappa} e^{-c \kappa t} \right) \left( A_{\kappa} e^{\kappa x} + B_{\kappa} e^{-\kappa x} \right) \, d\kappa + \int_{0}^{\infty} \left[ C_k \cos(ckt) + D_k \sin(ckt) \right] \left[ A_k \cos(kx) + B_k \sin(kx) \right] \, dk \ . \\[6pt]
\end{align*} \] </div>

<p class=show-on-mobile> Aside from the humourous visual of watching your goofy ahh squinting at your phone screen like a bloody kitten, this is not something I'd like on my page</p>

### Boundary conditions

Never fear, in most cases we don't actually have to fully expand that ugly ahh equation.

<div class=eqn> \[ \xi(0, t) = \xi(L, t) = 0 \] </div>

#### Case 1

When \\( x \\) is set to 0, we get:

<div class=eqn> \[ \xi(x, t; 0) = (B_0)(C_0 t + D_0) = 0 \] </div>

That means \\( B_0 = 0 \\).

Now with that in mind, when \\( L \\) is set to 0, we get:

<div class=eqn> \[ \xi(x, t; 0) = (A_0 L)(C_0 t + D_0) = 0 \] </div>

That means \\( A_0 = 0 \\) as well. That means there are no linear solutions

#### Case 2

When \\( x \\) is set to 0, we get:

<div class=eqn> \[ \left( C_{\kappa} e^{c \kappa t} + D_{\kappa} e^{-c \kappa t} \right) \left( A_{\kappa} + B_{\kappa} \right) \] </div>

That means \\( A_{\kappa} + B_{\kappa} = 0 \\), or \\( A_{\kappa} = -B_{\kappa} \\). Now when \\( x \\) is set to \\( L \\), we get:

<div class=eqn> \[ \left( C_{\kappa} e^{c \kappa t} + D_{\kappa} e^{-c \kappa t} \right) \left( A_{\kappa} e^{ \kappa x} - A_{\kappa} e^{- \kappa x} \right) \] </div>

<div class=eqn> \[ A\sinh{\kappa L} = 0 \] </div>

This is true if either \\( A_\kappa = 0 \\) or \\( \kappa = 0 \\), but since we have already said that \\( \kappa^2 > 0 \\), then that must mean that \\( A_\kappa = 0 \\), once again leaving no solution.

<div class=llarge-eqn> \[
\xi(t, x; \alpha_S > 0) = \int_{0}^{\infty} 0 \left( C_{\kappa} e^{c \kappa t} + D_{\kappa} e^{-c \kappa t} \right) \, d\kappa = 0.
\] </div>

#### Case 3

That means:

<div class=large-eqn> \[
\xi(t, x; \alpha_S < 0) = \sum_{n=1}^{\infty} \left( C_n \cos(\omega_n t) + D_n \sin(\omega_n t) \right) \sin(k_n x)
\] </div>

### The Delta Function

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \delta(x) = \lim_{\Delta x \to 0} \begin{cases} 0 & |x| > \frac{\Delta x}{2} \ , \\ \frac{1}{\Delta x} & |x| \le \frac{\Delta x}{2} \ . \end{cases} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The Delta Function
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class=eqn> \[ \delta(x - x_0) = \begin{cases} 
0 & x \neq x_0 \ , \\ 
\infty & x = x_0 \ . 
\end{cases} \] </div>

<div class=eqn> \[ \int_{-\infty}^{+\infty} \delta(x - x_0) \, dx = 1 \ . \] </div>

<div class=eqn> \[ \int_{a}^{b} \delta(x - x_0) \, dx = \begin{cases} 
1 & a \leq x_0 \leq b \ , \\ 
0 & x_0 < a \text{ or } x_0 > b \ . 
\end{cases} \] </div>

<div class=eqn> \[ \int_{-\infty}^{+\infty} \delta(x - x_0) f(x) \, dx = f(x_0) \ . \] </div>
