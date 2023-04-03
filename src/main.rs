use std::fmt;

enum Gem {
        Diamond, Sapphire, Ruby, Topaz, Onyx, Jade
    }

    impl fmt::Display for Gem {
        fn fmt(&self, f: &mut fmt::Formatter) ->   fmt::Result {
            match self {
                Gem::Diamond => {write!(f,"Diamond")},
                Gem::Sapphire => {write!(f,"Sapphire")},
                Gem::Ruby => {write!(f,"Ruby")},
                Gem::Topaz => {write!(f,"Topaz")},
                Gem::Onyx => {write!(f,"Onyx")},
                Gem::Jade => {write!(f,"Jade")},

            }
        }
    }

fn main() {
    // let gem1 = (Gem::Onyx, 20.00);
    // let gem2 = (Gem::Jade, 10.00);
    let gems = [(Gem::Onyx, 25.00), (Gem::Diamond, 100.00), (Gem::Onyx, 50.00), (Gem::Ruby, 10.00)];

    for gem in gems{
        println!("This gem is {} and is worth {}", gem.0, gem.1)
    }
    
}
