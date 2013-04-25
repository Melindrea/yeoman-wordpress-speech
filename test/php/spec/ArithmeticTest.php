<?php
//Basic class to show how tests are done
class ArithmeticTest extends PHPUnit_Framework_TestCase
{
    public function testAddition()
    {
        $actual = 1 + 1;
        $this->assertEquals(2, $actual);
    }
}
