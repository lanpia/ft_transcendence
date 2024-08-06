
function hookDOMRootPage() {
    function hideModalBackdrops() {
        var backdrops = document.getElementsByClassName('modal-backdrop fade show');
        for (var i = 0; i < backdrops.length; i++) {
            backdrops[i].style.display = 'none';
        }
    }
    hideModalBackdrops();
}

const rootPage = `
    <div class="container d-flex justify-content-center align-items-center" style="height: 80vh;">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#LoginModal">
            Getting Started
        </button>

        <!-- Modal -->
        <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="LoginModalLabel">Login</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Form -->
                <form id="login-form" class="needs-validation" novalidate>
                <div class="modal-body">
                    <div class="mb-3">
                    <label for="validationServerUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationServerUsername" aria-describedby="validationServerUsernameFeedback" required>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        Invalid username
                        </div>
                    </div>
                    </div>

                    <div class="mb-3">
                        <label for="validationServerUsername" class="form-label">Password</label>
                        <div class="input-group has-validation">
                        <input type="text" class="form-control is-invalid " id="validationServerUsername" aria-describedby="validationServerPasswordFeedback" required>
                        <div id="validationServerPasswordFeedback" class="invalid-feedback">
                            Invalid password
                        </div>
                        </div>
                    </div>
                    </div>
                    
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Sign up
                    </button>
                    <button type="submit" class="btn btn-primary" id="login-btn">Login</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
`
export { rootPage, hookDOMRootPage, };