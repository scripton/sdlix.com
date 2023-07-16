<div class="container">
<div class="text-center">
   <h2 class="section-heading text-uppercase">Meet the Team</h2>
</div>

<div class="row justify-content-md-center team-members">
{% for bio in site.bio %}
   <div class="col-md-4 col-sm-12 mx-auto">
      <div class="team-member">
         <div class="member-info">
            <a>
               <img class="mx-auto member-img" src="{{ bio.img }}" alt="{{ bio.name }}">
               <h4>{{ bio.name }}</h4>
               <p class="text-muted">{{ bio.role }}</p>
               <p class="member-intro">{{ bio.intro }}</p>
            </a>
         </div>
         <div class="member-links row justify-content-between">
            <div class="col-md-8 col-sm-8 col">
               <button type="button" data-toggle="modal" class="btn btn-outline-dark" data-target="#modal-{{ bio.identifier }}">Read More</button>
            </div>

            <div class="col-md-3 col-sm-3 col">
               <a class="btn btn-dark" target="_blank" href="{{ bio.websiteUrl }}"><i class="las la-globe"></i></a>
            </div>
         </div>
      </div>

   </div>

   <!-- Modal -->
   <div class="modal fade" id="modal-{{ bio.identifier }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>

               <img class="mx-auto member-img" src="{{ bio.img }}" alt="{{ bio.name }}">
               <h4>{{ bio.name }}</h4>
               <p class="text-muted">{{ bio.role }}</p>
         
            <div class="bio-intro">
               {{ bio.intro }}
            </div>

            {{ bio.content }}
         </div>
         <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Dismiss</button>
         </div>
      </div>
   </div>
   </div>
{% endfor %}
</div>

<div class="row">
   <div class="col-lg-8 mx-auto text-center">
      <p class="large text-muted">sdLix is a company that combines talent with experience to deliver the best solutions.
      </p>
   </div>
</div>
