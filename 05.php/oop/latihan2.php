<?php
// Nama class biasakan diawali dengan huruf besar
class Lingkaran {
    private $jarijari; // property
    const PHI = 3.14; // konstanta

    // constructor
    function __construct($r)
    {
        $this->jarijari = $r;
    }

    // method
    function getLuas()
    {
        return self::PHI * $this->jarijari * $this->jarijari;
    }

    // method
    function getKeliling()
    {
        return 2 * self::PHI * $this->jarijari;
    }
}
?>