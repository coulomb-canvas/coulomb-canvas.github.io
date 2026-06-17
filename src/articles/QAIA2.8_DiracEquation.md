---
subid: sr-dirac
title: Dirac Notation
topic: qaia2
---
<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box large-eqn" style="text-align: center; color: var(--text); margin: auto;">
\[
-i\hbar c\left(
\alpha_x\frac{\partial}{\partial x}
+\alpha_y\frac{\partial}{\partial y}
+\alpha_z\frac{\partial}{\partial z}
+\beta mc^2
\right)\Psi(\mathbf{r},t)
=
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t).
\]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

The α matrices are comprised of four 2 ×2 matrices, the diagonal ones are zero and the off-diagonal ones are the Pauli spin matrices, σx, σy, σz and β has zero off-diagonal element, and upper 2 diagonal elements equal to one and the lower two equal to minus one.

Written out in full form, the Dirac equation is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box llarge-eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \style{font-size: 5vw}{\left(
                -i\hbar c
                \begin{pmatrix}
                0 & 0 & 1 & 0\\
                0 & 0 & 0 & \bar{1}\\
                1 & 0 & 0 & 0\\
                0 & \bar{1} & 0 & 0
                \end{pmatrix}
                \frac{\partial}{\partial z}
                + mc^2
                \begin{pmatrix}
                1 & 0 & 0 & 0\\
                0 & 1 & 0 & 0\\
                0 & 0 & \bar{1} & 0\\
                0 & 0 & 0 & \bar{1}
                \end{pmatrix}
                \right)
                \begin{pmatrix}
                u_1(p)\\
                u_2(p)\\
                u_3(p)\\
                u_4(p)
                \end{pmatrix}
                e^{i\left(\frac{pz}{\hbar}-\frac{Et}{\hbar}\right)}
                =
                i\hbar \frac{\partial}{\partial t}
                \begin{pmatrix}
                u_1(p)\\
                u_2(p)\\
                u_3(p)\\
                u_4(p)
                \end{pmatrix}
                e^{i\left(\frac{pz}{\hbar}-\frac{Et}{\hbar}\right)}} \] 
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

In the non-relativistic limit (\\( c_2 \to \infty \\)) the Dirac Equation reduces to the Schrodinger Equation but now he have an explanation for spin. It can also explain spin-orbit coupling.

As for the negative energy states, it was interpreted to refer to a particle with the same mass but opposite charge, what we now know as anti-particles. This equation predicted them.


