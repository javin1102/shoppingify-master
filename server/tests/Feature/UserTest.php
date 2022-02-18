<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use WithFaker;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    private $password = "mypassword";
    public function testlogin()
    {
        $email = $this->faker()->email();

        $response = $this->postJson('/api/auth/login', [
            'email' => $email,
            'password' => $this->password
        ]);

        $response->assertStatus(400);
    }

    public function testRegister()
    {
        $email = 'javinrio112@gmail.com';
        $response = $this->postJson('/api/auth/register', [
            'email' => $email,
            'password' => $this->password,
            'password_confirmation' => $this->password
        ]);

        $response->assertStatus(400);
    }
}
