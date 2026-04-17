<?php

class Vehicle
{
    protected $type;
    protected $fuel;

    protected function __construct($type, $fuel)
    {
        $this->type = $type;
        $this->fuel = $fuel;
    }

    protected function getInfo()
    {
        echo "Jenis Kendaraan: " . $this->type . "<br>";
        echo "Bahan Bakar: " . $this->fuel . "<br>";
    }
}


/*
lanjutan kode sebelumnya
*/

class Motor extends Vehicle
{
    public $wheels;

    public function __construct($type, $fuel, $wheels)
    {
        parent::__construct($type, $fuel);
        $this->wheels = $wheels;
    }

    public function getInfo()
    {
        parent::getInfo();
        echo "Jumlah Roda: " . $this->wheels . "<br>";
    }
}


// Contoh penggunaan
$motor = new Motor("Motor", "Bensin", 2);
$motor->getInfo();
?>