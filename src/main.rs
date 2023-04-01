enum Gem {
        Diamond, Sapphire, Ruby, Topaz, Onyx, Jade
    }

fn main() {
    // let gem1 = (Gem::Onyx, 20.00);
    // let gem2 = (Gem::Jade, 10.00);
    let gems = [(Gem::Onyx, 25.00), (Gem::Diamond, 100.00), (Gem::Onyx, 50.00), (Gem::Ruby, 10.00)];

    for gem in gems{
        println!("This gem is worth {}", gem.1)
    }
    
}
