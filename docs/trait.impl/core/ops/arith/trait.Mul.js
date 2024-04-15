(function() {var implementors = {
"peroxide":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i64.html\">i64</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt; for &amp;'a <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl&lt;T: <a class=\"trait\" href=\"peroxide/traits/math/trait.Vector.html\" title=\"trait peroxide::traits::math::Vector\">Vector</a> + <a class=\"trait\" href=\"peroxide/traits/fp/trait.FPVector.html\" title=\"trait peroxide::traits::fp::FPVector\">FPVector</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a> for <a class=\"struct\" href=\"peroxide/traits/pointer/struct.Redox.html\" title=\"struct peroxide::traits::pointer::Redox\">Redox</a>&lt;T&gt;<div class=\"where\">where\n    &lt;T as <a class=\"trait\" href=\"peroxide/traits/fp/trait.FPVector.html\" title=\"trait peroxide::traits::fp::FPVector\">FPVector</a>&gt;::<a class=\"associatedtype\" href=\"peroxide/traits/fp/trait.FPVector.html#associatedtype.Scalar\" title=\"type peroxide::traits::fp::FPVector::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = &lt;T as <a class=\"trait\" href=\"peroxide/traits/fp/trait.FPVector.html\" title=\"trait peroxide::traits::fp::FPVector\">FPVector</a>&gt;::<a class=\"associatedtype\" href=\"peroxide/traits/fp/trait.FPVector.html#associatedtype.Scalar\" title=\"type peroxide::traits::fp::FPVector::Scalar\">Scalar</a>&gt;,</div>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for &amp;'a <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt; for &amp;'a <a class=\"struct\" href=\"peroxide/structure/sparse/struct.SPMatrix.html\" title=\"struct peroxide::structure::sparse::SPMatrix\">SPMatrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt; for <a class=\"enum\" href=\"peroxide/structure/ad/enum.AD.html\" title=\"enum peroxide::structure::ad::AD\">AD</a>"],["impl&lt;T: <a class=\"trait\" href=\"peroxide/traits/math/trait.Vector.html\" title=\"trait peroxide::traits::math::Vector\">Vector</a> + <a class=\"trait\" href=\"peroxide/traits/fp/trait.FPVector.html\" title=\"trait peroxide::traits::fp::FPVector\">FPVector</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"peroxide/traits/pointer/struct.Redox.html\" title=\"struct peroxide::traits::pointer::Redox\">Redox</a>&lt;T&gt;<div class=\"where\">where\n    &lt;T as <a class=\"trait\" href=\"peroxide/traits/fp/trait.FPVector.html\" title=\"trait peroxide::traits::fp::FPVector\">FPVector</a>&gt;::<a class=\"associatedtype\" href=\"peroxide/traits/fp/trait.FPVector.html#associatedtype.Scalar\" title=\"type peroxide::traits::fp::FPVector::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>, Output = &lt;T as <a class=\"trait\" href=\"peroxide/traits/fp/trait.FPVector.html\" title=\"trait peroxide::traits::fp::FPVector\">FPVector</a>&gt;::<a class=\"associatedtype\" href=\"peroxide/traits/fp/trait.FPVector.html#associatedtype.Scalar\" title=\"type peroxide::traits::fp::FPVector::Scalar\">Scalar</a>&gt;,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt; for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/traits/pointer/struct.Redox.html\" title=\"struct peroxide::traits::pointer::Redox\">Redox</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt;&gt; for &amp;<a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a> for <a class=\"enum\" href=\"peroxide/structure/ad/enum.AD.html\" title=\"enum peroxide::structure::ad::AD\">AD</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for &amp;'a <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/traits/pointer/struct.Redox.html\" title=\"struct peroxide::traits::pointer::Redox\">Redox</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"peroxide/structure/sparse/struct.SPMatrix.html\" title=\"struct peroxide::structure::sparse::SPMatrix\">SPMatrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a> for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt; for <a class=\"struct\" href=\"peroxide/structure/sparse/struct.SPMatrix.html\" title=\"struct peroxide::structure::sparse::SPMatrix\">SPMatrix</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i32.html\">i32</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"enum\" href=\"peroxide/structure/ad/enum.AD.html\" title=\"enum peroxide::structure::ad::AD\">AD</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/traits/pointer/struct.Redox.html\" title=\"struct peroxide::traits::pointer::Redox\">Redox</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt;&gt; for &amp;<a class=\"struct\" href=\"peroxide/structure/sparse/struct.SPMatrix.html\" title=\"struct peroxide::structure::sparse::SPMatrix\">SPMatrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i64.html\">i64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i32.html\">i32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt; for <a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a> for <a class=\"struct\" href=\"peroxide/structure/polynomial/struct.Polynomial.html\" title=\"struct peroxide::structure::polynomial::Polynomial\">Polynomial</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i64.html\">i64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i32.html\">i32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"peroxide/traits/pointer/struct.Redox.html\" title=\"struct peroxide::traits::pointer::Redox\">Redox</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f64.html\">f64</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"peroxide/structure/matrix/struct.Matrix.html\" title=\"struct peroxide::structure::matrix::Matrix\">Matrix</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()