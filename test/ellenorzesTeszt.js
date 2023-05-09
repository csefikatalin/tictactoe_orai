import Jatekter from "../Jatekter.js";

QUnit.module(
    "TicTacToe Győztes ellenőrzése léteznek-e a szükséges metódusok?",
    (hooks) => {
        let jatekter;
        hooks.before(() => {
            jatekter = new Jatekter();
        });

        QUnit.test("0. létezik-e? az ellenorzes metodus? ", function (assert) {
            assert.ok(jatekter.ellenorzes, "létezik-e az ellenorzes metódus? ");
        });

        QUnit.test("0. ellenorzes függvény-e", function (assert) {
            assert.ok(typeof jatekter.ellenorzes === "function", "Függvény-e?");
        });
        QUnit.test(
            "0. létezik-e? az getVizszintes metodus? ",
            function (assert) {
                assert.ok(
                    jatekter.getVizszintes,
                    "létezik-e az getVizszintes metódus? "
                );
            }
        );
        QUnit.test("0. getVizszintes függvény-e", function (assert) {
            assert.ok(
                typeof jatekter.getVizszintes === "function",
                "Függvény-e?"
            );
        });
        QUnit.test(
            "0. létezik-e? az getFuggoleges metodus? ",
            function (assert) {
                assert.ok(
                    jatekter.getFuggoleges,
                    "létezik-e az getVizszintes metódus? "
                );
            }
        );
        QUnit.test("0. getFuggoleges függvény-e", function (assert) {
            assert.ok(
                typeof jatekter.getFuggoleges === "function",
                "Függvény-e?"
            );
        });
        QUnit.test("0. létezik-e? az getAtlo metodus? ", function (assert) {
            assert.ok(jatekter.getAtlo, "létezik-e az getVizszintes metódus? ");
        });
        QUnit.test("0. getAtlo függvény-e", function (assert) {
            assert.ok(typeof jatekter.getAtlo === "function", "Függvény-e?");
        });
    }
);

QUnit.module("TicTacToe getVizszintes()", function (p) {
    let jatekter;
    p.before(function () {
        jatekter = new Jatekter();
    });

    QUnit.test(
        '[" ", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getVizszintes(), "   @   @   @");
        }
    );
    QUnit.test(
        ' ["O", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = ["O", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getVizszintes(), "O  @   @   @");
        }
    );
    QUnit.test(
        ' ["O", " ", " ", "X", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = ["O", " ", " ", "X", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getVizszintes(), "O  @X  @   @");
        }
    );
    QUnit.test(
        ' ["O", "O", "O", "X", "X", "O", "X", "X", "O"]',
        function (assert) {
            jatekter.lista = ["O", "O", "O", "X", "X", "O", "X", "X", "O"];
            assert.equal(jatekter.getVizszintes(), "OOO@XXO@XXO@");
        }
    );
    QUnit.test(
        ' ["X", "O", "O", "O", "X", "O", "X", "X", "O"]',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "O", "X", "O", "X", "X", "O"];
            assert.equal(jatekter.getVizszintes(), "XOO@OXO@XXO@");
        }
    );
    QUnit.test(
        ' ["X", "O", "O", "O", "X", "X", "X", "X", "O"]',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "O", "X", "X", "X", "X", "O"];
            assert.equal(jatekter.getVizszintes(), "XOO@OXX@XXO@");
        }
    );
});

QUnit.module("TicTacToe getFuggoleges()", function (p) {
    let jatekter;
    p.before(function () {
        jatekter = new Jatekter();
    });

    QUnit.test(
        '1.  [" ", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getFuggoleges(), "   @   @   @");
        }
    );
    QUnit.test(
        '2. ["O", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = ["O", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getFuggoleges(), "O  @   @   @");
        }
    );
    QUnit.test(
        '3. ["O", " ", " ", "X", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = ["O", " ", " ", "X", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getFuggoleges(), "OX @   @   @");
        }
    );
    QUnit.test(
        '4. ["O", "O", "O", "X", "X", "O", "X", "X", "O"] O nyer a 3. oszlopban',
        function (assert) {
            jatekter.lista = ["O", "O", "O", "X", "X", "O", "X", "X", "O"];
            assert.equal(jatekter.getFuggoleges(), "OXX@OXX@OOO@");
        }
    );
    QUnit.test(
        '5. ["X", "O", "O", "X", "O", "X", "X", "X", "O"] X nyer az 1. oszlopban',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "X", "O", "X", "X", "X", "O"];
            assert.equal(jatekter.getFuggoleges(), "XXX@OOX@OXO@");
        }
    );
    QUnit.test(
        '6. ["X", "O", "O", "O", "X", "X", "X", "X", "O"] Nincs nyertes',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "O", "X", "X", "O", "X", "O"];
            assert.equal(jatekter.getFuggoleges(), "XOO@OXX@OXO@");
        }
    );
});
QUnit.module("TicTacToe getAtlo()", function (p) {
    let jatekter;
    p.before(function () {
        jatekter = new Jatekter();
    });

    QUnit.test(
        '1.  [" ", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getAtlo(), "   @   ");
        }
    );
    QUnit.test(
        '2. ["O", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = ["O", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getAtlo(), "O  @   ");
        }
    );
    QUnit.test(
        '3. ["O", " ", " ", "X", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = ["O", " ", " ", "X", " ", " ", " ", " ", " "];
            assert.equal(jatekter.getAtlo(), "O  @   ");
        }
    );
    QUnit.test(
        '4. ["O", "O", "O", "X", "X", "O", "X", "X", "O"] átlóban nincs nyerés',
        function (assert) {
            jatekter.lista = ["O", "O", "O", "X", "X", "O", "X", "X", "O"];
            assert.equal(jatekter.getAtlo(), "OXO@OXX");
        }
    );
    QUnit.test(
        '5. ["X", "O", "O", "O", "X", "X", "O", "X", "X"] egyik átló',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "O", "X", "X", "O", "X", "X"];
            assert.equal(jatekter.getAtlo(), "XXX@OXO");
        }
    );
    QUnit.test(
        '6. ["X", "O", "O", "O", "X", "X", "X", "X", "O"] másik átló',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "O", "O", "X", "O", "X", "O"];
            assert.equal(jatekter.getAtlo(), "XOO@OOO");
        }
    );
});

QUnit.module("TicTacToe ellenorzes()", function (p) {
    let jatekter;
    p.before(function () {
        jatekter = new Jatekter();
    });

    QUnit.test(
        '1.  [" ", " ", " ", " ", " ", " ", " ", " ", " "]',
        function (assert) {
            jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.ellenorzes(), "");
        }
    );
    QUnit.test(
        '2. ["O", " ", " ", "X", " ", " ", "O", " ", " "] nincs még győztes',
        function (assert) {
            jatekter.lista = ["O", " ", " ", " ", " ", " ", " ", " ", " "];
            assert.equal(jatekter.ellenorzes(), "");
        }
    );

    QUnit.test(
        '3. ["O", "X", "O", "X", "X", "O", "X", "X", "O"] 9 kitöltve és nincs nyertes',
        function (assert) {
            jatekter.lista = ["O", "X", "O", "X", "O", "O", "X", "O", "X"];
            assert.equal(jatekter.ellenorzes(), "");
        }
    );
    QUnit.test(
        '4. ["X", "O", "O", "O", "X", "X", "O", "X", "X"]9 van kitöltve és van nyertes',
        function (assert) {
            jatekter.lista = ["X", "O", "O", "O", "X", "X", "O", "X", "X"];
            assert.equal(jatekter.ellenorzes(), "X");
        }
    );
    QUnit.test(
        '5. ["X", "O", "O", "O", "X", "X", "O", "X", "X"] nincs minden kitöltve, és van nyertes',
        function (assert) {
            jatekter.lista = [" ", "X", "O", " ", "X", "O", " ", "X", " "];
            assert.equal(jatekter.ellenorzes(), "X");
        }
    );
});
